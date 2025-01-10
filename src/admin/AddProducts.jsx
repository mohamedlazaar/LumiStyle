import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Navigate } from 'react-router-dom';
import { useUser } from "./UserContext";

function AddProducts() {
    
    const { user, setUser } = useUser(); 
    useEffect(() => {
      const savedUser = sessionStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }, [setUser]);
  
  if (!user) {
    return <Navigate to="/admin" />; // If no user is logged in, redirect to login page
  }

  // State variables
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productComparePrice, setProductComparePrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [productImages, setProductImages] = useState(["", "", "", ""]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [reviewCount, setReviewCount] = useState("");
  const [rating, setRating] = useState("");

  // Handle image input changes
  const handleInputChange = (index, event) => {
    const newValues = [...productImages];
    newValues[index] = event.target.value;
    setProductImages(newValues);
  };

  // Add a new product to Firestore
  const submitAddProducts = async (e) => {
    e.preventDefault();
    const docData = {
      Title: productTitle,
      Description: productDescription,
      Price: parseFloat(productPrice),
      Compare_Price: parseFloat(productComparePrice),
      rating: parseFloat(rating),
      reviewCount: reviewCount,
      Images: productImages,
      createdAt: serverTimestamp(),
      Colors: selectedColors,
    };
  
    try {
      const docRef = await addDoc(collection(db, "products"), docData);
      if (selectedOption) {
        const sectionData = {
          id: docRef.id,
          Title: productTitle,
          Price: parseFloat(productPrice),
          Images: productImages[0],
          Rating: parseFloat(rating),
          reviewsCount: reviewCount,
        };
        await addDoc(collection(db, selectedOption), sectionData);
      }
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };
  
  // Handle option selection
  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle Color Select
  const handleColorSelect = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    }
  };

  // Reset form and fetch products when successful
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      setProductTitle("");
      setProductDescription("");
      setProductPrice("");
      setProductComparePrice("");
      setProductImages(["", "", "", "", ""]);
      setRating("");
      setReviewCount("");
      setSelectedColors([]);
      setSelectedOption("");
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="">
      <div className="w-full md:p-10 py-10 px-2 gap-5">
        {isSuccess && (
          <div
            style={{
              display: "flex",
              padding: "20px",
              color: "white",
              backgroundColor: "green",
            }}
          >
            Produit ajouté avec succès
          </div>
        )}
        <form onSubmit={submitAddProducts} className="w-[100%] mx-auto py-5 px-3 md:px-5">
          <div className="grid grid-cols-[auto] md:grid-cols-[2fr_1fr] gap-10">
            <div>
              <h1 className="text-3xl font-bold text-black">Ajouter un produit</h1>
              <div className="flex flex-col">
                <label
                  className="text-black text-lg font-normal my-2"
                  htmlFor="title"
                >
                  Titre du produit:
                </label>
                <input
                  type="text"
                  id="title"
                  value={productTitle}
                  className="border-[1px] border-[gray] outline-none p-2"
                  onChange={(e) => setProductTitle(e.target.value)}
                  placeholder="Titre du produit"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-black text-lg font-normal my-2"
                  htmlFor="price"
                >
                  Prix du produit:
                </label>
                <input
                  type="number"
                  id="price"
                  value={productPrice}
                  className="border-[1px] border-[gray] outline-none p-2"
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Prix du produit"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-black text-lg font-normal my-2"
                  htmlFor="comparePrice"
                >
                  Comparaison de prix de produit:
                </label>
                <input
                  type="number"
                  id="comparePrice"
                  value={productComparePrice}
                  className="border-[1px] border-[gray] outline-none p-2"
                  onChange={(e) => setProductComparePrice(e.target.value)}
                  placeholder=" Comparaison de prix de produit"
                  required
                />
              </div>
              <div className="mt-2">
                <h2 className="text-black text-lg font-normal">Ajouter à: </h2>
                <div className="flex gap-4 items-center p-2 border-[gray] border-[1px]">
                  <label className="text-black text-lg font-normal cursor-pointer">
                    <input
                      type="radio"
                      value="featured"
                      checked={selectedOption === "featured"}
                      onChange={handleSelectedOption}
                      className="mx-1"
                    />
                    Section 1
                  </label>
                  <label className="text-black text-lg font-normal my-2 cursor-pointer">
                    <input
                      type="radio"
                      value="section2"
                      checked={selectedOption === "section2"}
                      onChange={handleSelectedOption}
                      className="mx-1"
                    />
                    Section 2
                  </label>
                  <label className="text-black text-lg font-normal my-2 cursor-pointer">
                    <input
                      type="radio"
                      value="section3"
                      checked={selectedOption === "section3"}
                      onChange={handleSelectedOption}
                      className="mx-1"
                    />
                    Section 3
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <h2 className="text-black text-lg font-normal">Select Colors: </h2>
                <div className="flex gap-4 items-center p-2 border-[gray] border-[1px]">
                  <label className="text-black text-lg font-normal cursor-pointer">
                    <input
                      type="checkbox"
                      value="gold"
                      checked={selectedColors.includes("gold")}
                      onChange={handleColorSelect}
                      className="mx-1"
                    />
                   Or
                  </label>
                  <label className="text-black text-lg font-normal cursor-pointer">
                    <input
                      type="checkbox"
                      value="silver"
                      checked={selectedColors.includes("silver")}
                      onChange={handleColorSelect}
                      className="mx-1"
                    />
                    Argent
                  </label>
                  <label className="text-black text-lg font-normal cursor-pointer">
                    <input
                      type="checkbox"
                      value="bronze"
                      checked={selectedColors.includes("bronze")}
                      onChange={handleColorSelect}
                      className="mx-1"
                    />
                    Bronze
                  </label>
                </div>
              </div>
              <div className="flex gap-2 my-[20px]">
                <div>
                  <label className="text-black text-lg font-normal my-2 mx-1">Avis Nombre:</label>
                  <input
                    type="text"
                    className="border-[1px] border-[gray] outline-none p-1"
                    placeholder="20"
                    value={reviewCount}
                    onChange={(e) => setReviewCount(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-black text-lg font-normal my-2 mx-1">Notation: </label>
                  <input
                    type="number"
                    className="border-[1px] border-[gray] outline-none p-1"
                    placeholder="4.5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className="text-black text-lg font-normal my-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="10"
                  value={productDescription}
                  className="border-[1px] border-[gray] outline-none p-2 max-h-[200px]"
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Product Description"
                  required
                ></textarea>
              </div>
              <button
                className="border-gray-800 p-2 bg-slate-800 text-white self-center w-1/3 rounded-xl my-5 hover:bg-slate-500"
                type="submit"
              >
                Ajouter le produit
              </button>
            </div>
            <div className="md:pt-[50px]">
              <h2 className="text-black font-bold text-2xl mb-2">Ajouter des images :</h2>
              <div className="grid grid-cols-1 gap-2">
                {productImages.map((value, index) => (
                  <div key={index} className="flex">
                    <input
                      type="text"
                      className="border-[1px] border-[gray] outline-none p-2 w-[100%]"
                      value={value}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="URL de l'image"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full grid grid-cols-[auto_auto] gap-1 justify-center my-3">
                {productImages.map((value, index) => (
                  <div key={index} id={index} className={` ${index === 0 ? 'images' : ''}`}>
                    <img
                      className="w-full h-auto"
                      src={value || 'https://placehold.co/600x400'}
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;