import { GlobalStyle } from "./styles/globalStyle";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { SearchResultField } from "./components/Header/Search/SearchResultField";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const cartToLocalStorage = localStorage.getItem("@CARTLIST");

  const [productsList, setProductsList] = useState([]);

  const [productsListSecundary, setProductsListSecundary] = useState([]);

  const [productsCart, setProductsCart] = useState(
    cartToLocalStorage ? JSON.parse(cartToLocalStorage) : []
  );

  const [inputValue, setInputValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function showcase() {
      try {
        const { data } = await api.get("products");
        setProductsList(data);
        setProductsListSecundary(data);
      } catch (error) {}
    }
    showcase();
  }, []);

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(productsCart));
  }, [productsCart]);

  function handleClick(productId) {
    if (productsCart.some((element) => element.id === productId)) {
      const newProductsCart = productsCart.map((product) => {
        if (product.id === productId) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      setProductsCart(newProductsCart);
    } else {
      const addedToCart = productsList.find((product) => {
        return product.id === productId;
      });
      addedToCart.quantity = 1;
      setProductsCart([...productsCart, addedToCart]);
    }
  }

  function addquantity(productId) {
    const newProductsCart = productsCart.map((product) => {
      if (product.id === productId) {
        product.quantity++;
        return product;
      } else {
        return product;
      }
    });
    setProductsCart(newProductsCart);
  }

  function removeQuantity(productId) {
    const newProductsCart = productsCart.map((product) => {
      if (product.id === productId) {
        if (product.quantity === 1) {
          return product;
        } else {
          product.quantity--;
          return product;
        }
      } else {
        return product;
      }
    });
    setProductsCart(newProductsCart);
  }

  function removeProduct(productId) {
    const newCartList = productsCart.filter((product) => {
      return product.id !== productId;
    });
    setProductsCart(newCartList);
  }

  function removeAllProducts() {
    const newCartList = [];
    setProductsCart(newCartList);
    toast.success("Pedido enviado com sucesso!");
  }

  function showSelectedProducts(search) {
    const newListShowcase = productsList.filter((product) => {
      return (
        product.name.toUpperCase().includes(search.toUpperCase()) ||
        product.category.toUpperCase().includes(search.toUpperCase())
      );
    });
    setProductsList(newListShowcase);
    setInputValue("");

    if (newListShowcase.length > 0) {
      setSearchValue(search);
    } else {
      setSearchValue("");
    }
  }

  function clearSearch() {
    setSearchValue("");
    setProductsList(productsListSecundary);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header
        showSelectedProducts={showSelectedProducts}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className={"boxUlResultSearch"}>
        <SearchResultField
          searchValue={searchValue}
          clearSearch={clearSearch}
        />
        <ProductsList productsList={productsList} handleClick={handleClick} />
      </div>
      <Cart
        productsCart={productsCart}
        removeProduct={removeProduct}
        addquantity={addquantity}
        removeQuantity={removeQuantity}
        removeAllProducts={removeAllProducts}
      />
    </div>
  );
}

export default App;