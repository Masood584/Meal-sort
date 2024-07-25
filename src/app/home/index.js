import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Tabs from "../../components/tabs";
import axios from "axios";
import ProductCard from "../../components/productCard";
import AddMealDialog from "../../components/tabs/AddMealDialog";
import SkeletonCard from "../../components/skeleton";

const Home = () => {
  const btnRef = useRef(null);
  const [tabs, setTabs] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [allProducts2, setAllProduct2] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    fetchProoductData();
  }, []);

  const fetchProoductData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response?.statusText === "OK") {
        let data = response.data.recipes;
        let tempArray = data?.map((val) => {
          return { ...val, week: "all", isSelected: false };
        });
        setAllProducts(tempArray);
        setAllProduct2(tempArray);
      }
    } catch (error) {
      console.log(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetMeal = () => {
    const tempArray = [...allProducts2];
    selectedMeal.forEach((selected) => {
      const index = tempArray.findIndex(
        (product) => product.id === selected.id
      );
      if (index !== -1) {
        tempArray[index].week = selectedWeek.week;
        tempArray[index].isSelected = false;
      }
    });
    setAllProducts(tempArray);
    btnRef.current.handleClose();
    setTabs(selectedWeek.week);
    setSelectedMeal([]);
    setSelectedWeek(null);
  };

  const renderProducts = (tab) => {
    let temparray = [];
    allProducts?.map((val) => {
      if (val.week == tab) {
        temparray.push(val);
      }
    });

    return temparray;
  };

  const handleDelete = (val, index) => {
    let tempArray = [...allProducts];
    let newTempArray = [...allProducts2];
    tempArray[index].week = "all";
    newTempArray[newTempArray.findIndex((meal) => meal.id === val.id)].week =
      "all";
    console.log(tempArray, newTempArray, "sddsjhdasjhdasjhdasjhdjhasd");
    setAllProducts(tempArray);
    setAllProduct2(newTempArray);
  };

  return (
    <Box>
      <Banner />
      <Container className="app-container">
        <Box py={2.5}>
          <Typography variant="h2" fontSize={"1.25rem"} fontWeight={700}>
            Week orders
          </Typography>
        </Box>
      </Container>
      <Tabs
        tabs={tabs}
        setTabs={setTabs}
        count={selectedMeal?.length}
        handleOpenDialog={() => btnRef.current.isVisible()}
      />
      <Container className="app-container">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <ProductCard
            data={renderProducts(tabs)}
            setAllData={setAllProducts}
            mainData={allProducts2}
            setMainData={setAllProduct2}
            canSelect={tabs == "all" ? true : false}
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
            showDelete={tabs !== "all"}
            handleDelete={handleDelete}
          />
        )}
      </Container>
      <AddMealDialog
        ref={btnRef}
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
        handleSetMeal={handleSetMeal}
      />
    </Box>
  );
};

export default Home;
