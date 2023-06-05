import { createSlice } from "@reduxjs/toolkit";
const initial = {
  filters: false,
  productList: false,
  priceDetails: false,
  estimatePrice: false,
  productDetails: false,
  digitalOutOfStock: false,

  selectedFilters: [],
  savedFilters: [],

  filterOptions: {
    categoryId: [],
    productTypeId: [],
    subCategoryId: [],
    subsubCategoryId: [],
    classification: [],
    metalColorId: [],
    location: [],
    gender: [],
    maxPrice: "",
    minPrice: "",
    size: [],
  },

  estimateStoneDetails: [],
};
const catalogue = createSlice({
  name: "catalogue",
  initialState: initial,
  reducers: {
    // openCatalogueFilterPopup(state, action) {
    //   state.filters = true;
    // },
    // closeCatalogueFilterPopup(state, action) {
    //   state.filters = false;
    // },
    // gotoProductList(state, action) {
    //   state.productList = true;
    //   state.filters = false;
    // },
    // backToProductList(state, action) {
    //   state.productList = false;
    // },
    openPriceDetailsPopup(state, action) {
      state.priceDetails = true;
    },
    closePriceDetailsPopup(state, action) {
      state.priceDetails = false;
    },
    openEstimatePriceDetailsPopup(state, action) {
      state.estimatePrice = true;
    },
    closeEstimatePriceDetailsPopup(state, action) {
      state.estimatePrice = false;
    },
    openProductDetailsPopup(state, action) {
      state.productDetails = true;
    },
    closeProductDetailsPopup(state, action) {
      state.productDetails = false;
    },
    openDigitalOutOfStockPopup(state, action) {
      state.digitalOutOfStock = true;
    },
    closeDigitalOutOfStockPopup(state, action) {
      state.digitalOutOfStock = false;
    },
    setSelectedFilterOptions(state, action) {
      let localSelectedFilters = JSON.parse(
        localStorage.getItem("localSelectedFilters")
      );
      let localSavedFilters = JSON.parse(
        localStorage.getItem("localSavedFilters")
      );

      if (action.payload[1] === "Selected Size") {
        let localIndex = localSelectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([...localSelectedFilters, action.payload[0]?.slug])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters,
              [action.payload[0], action.payload[1]],
            ])
          );
        } else {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([
              ...localSelectedFilters.slice(0, localIndex),
              ...localSelectedFilters.slice(localIndex + 1),
            ])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters.slice(0, localIndex),
              ...localSavedFilters.slice(localIndex + 1),
            ])
          );
        }

        let index = state.selectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (index == -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          state.selectedFilters.splice(index, 1);
          state.savedFilters.splice(index, 1);
        }
      } else if (action.payload[1] === "Metal Colour") {
        let localIndex = localSelectedFilters.findIndex(
          (each) =>
            each === "yellow" ||
            each === "rose" ||
            each === "white" ||
            each === "yellow-rose"
        );

        if (localIndex === -1) {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([...localSelectedFilters, action.payload[0]?.slug])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters,
              [action.payload[0], action.payload[1]],
            ])
          );
        } else {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([
              ...localSelectedFilters.slice(0, localIndex),
              ...localSelectedFilters.slice(localIndex + 1),
              action.payload[0]?.slug,
            ])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters.slice(0, localIndex),
              ...localSavedFilters.slice(localIndex + 1),
              [action.payload[0], action.payload[1]],
            ])
          );

          // localStorage.setItem(
          //   "localSelectedFilters",
          //   JSON.stringify([...localSelectedFilters, action.payload[0]?.slug])
          // );

          // localStorage.setItem(
          //   "localSavedFilters",
          //   JSON.stringify([
          //     ...localSavedFilters,
          //     [action.payload[0], action.payload[1]],
          //   ])
          // );
        }

        let index = state.selectedFilters.findIndex(
          (each) =>
            each === "yellow" ||
            each === "rose" ||
            each === "white" ||
            each === "yellow-rose"
        );

        if (index === -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          state.selectedFilters.splice(index, 1);
          state.savedFilters.splice(index, 1);
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        }
      } else {
        let localIndex = localSelectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([...localSelectedFilters, action.payload[0]?.slug])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters,
              [action.payload[0], action.payload[1]],
            ])
          );
        } else {
          localStorage.setItem(
            "localSelectedFilters",
            JSON.stringify([
              ...localSelectedFilters.slice(0, localIndex),
              ...localSelectedFilters.slice(localIndex + 1),
            ])
          );

          localStorage.setItem(
            "localSavedFilters",
            JSON.stringify([
              ...localSavedFilters.slice(0, localIndex),
              ...localSavedFilters.slice(localIndex + 1),
            ])
          );
        }

        let index = state.selectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (index == -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          state.selectedFilters.splice(index, 1);
          state.savedFilters.splice(index, 1);
        }
      }
    },
    setClearFilters(state, action) {
      localStorage.setItem("localSelectedFilters", JSON.stringify([]));
      localStorage.setItem("localSavedFilters", JSON.stringify([]));
      state.selectedFilters = [];
      state.savedFilters = [];

      localStorage.setItem(
        "localFilterOptions",
        JSON.stringify({
          categoryId: [],
          productTypeId: [],
          subCategoryId: [],
          subsubCategoryId: [],
          classification: [],
          metalColorId: [],
          location: [],
          gender: [],
          maxPrice: "",
          minPrice: "",
          size: [],
        })
      );
      state.filterOptions.categoryId = [];
      state.filterOptions.productTypeId = [];
      state.filterOptions.subCategoryId = [];
      state.filterOptions.subsubCategoryId = [];
      state.filterOptions.metalColorId = [];
      state.filterOptions.location = [];
      state.filterOptions.gender = [];
      state.filterOptions.minPrice = "";
      state.filterOptions.maxPrice = "";
      state.filterOptions.size = [];
      state.filterOptions.classification = [];
    },

    setClearMinPrice(state, action) {
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );

      localStorage.setItem(
        "localFilterOptions",
        JSON.stringify({
          ...localFilterOptions,
          minPrice: "",
        })
      );
      state.filterOptions.minPrice = "";
    },
    setClearMaxPrice(state, action) {
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );

      localStorage.setItem(
        "localFilterOptions",
        JSON.stringify({
          ...localFilterOptions,
          maxPrice: "",
        })
      );

      state.filterOptions.maxPrice = "";
    },

    setMountingMinPriceFilter(state, action) {
      state.filterOptions.minPrice = action.payload;
    },

    setMountingMaxPriceFilter(state, action) {
      state.filterOptions.maxPrice = action.payload;
    },

    setFilterMinPrice(state, action) {
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );

      if (action.payload !== undefined) {
        localStorage.setItem(
          "localFilterOptions",
          JSON.stringify({
            ...localFilterOptions,
            minPrice: action.payload,
          })
        );

        state.filterOptions.minPrice = action.payload;
      }
    },
    setFilterMaxPrice(state, action) {
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );
      if (action.payload !== undefined) {
        localStorage.setItem(
          "localFilterOptions",
          JSON.stringify({
            ...localFilterOptions,
            maxPrice: action.payload,
          })
        );

        state.filterOptions.maxPrice = action.payload;
      }
    },

    setClearMetalColourFilters(state, action) {
      let localSelectedFilters = JSON.parse(
        localStorage.getItem("localSelectedFilters")
      );
      let localSavedFilters = JSON.parse(
        localStorage.getItem("localSavedFilters")
      );
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );

      let localIndex = localSelectedFilters.findIndex(
        (each) =>
          each === "yellow" ||
          each === "rose" ||
          each === "white" ||
          each === "yellow-rose"
      );

      localStorage.setItem(
        "localFilterOptions",
        JSON.stringify({
          ...localFilterOptions,
          metalColorId: [],
        })
      );

      if (localIndex !== -1) {
        localStorage.setItem(
          "localSelectedFilters",
          JSON.stringify([
            ...localSelectedFilters.slice(0, localIndex),
            ...localSelectedFilters.slice(localIndex + 1),
          ])
        );

        localStorage.setItem(
          "localSavedFilters",
          JSON.stringify([
            ...localSavedFilters.slice(0, localIndex),
            ...localSavedFilters.slice(localIndex + 1),
          ])
        );
      }

      let index = state.selectedFilters.findIndex(
        (each) =>
          each === "yellow" ||
          each === "rose" ||
          each === "white" ||
          each === "yellow-rose"
      );

      state.filterOptions.metalColorId = [];
      if (index !== -1) {
        state.selectedFilters.splice(index, 1);
        state.savedFilters.splice(index, 1);
      }
    },

    //..................................................

    setCategoryFilterId(state, action) {
      let localFilterOptions = JSON.parse(
        localStorage.getItem("localFilterOptions")
      );

      if (action.payload[1] == "Category") {
        let localIndex = localFilterOptions.categoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              categoryId:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.categoryId, action.payload[0].id]
                  : [...localFilterOptions.categoryId, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              categoryId: [
                ...localFilterOptions.categoryId.slice(0, localIndex),
                ...localFilterOptions.categoryId.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.categoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.categoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.categoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Product Type") {
        let localIndex = localFilterOptions.productTypeId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              productTypeId:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.productTypeId, action.payload[0].id]
                  : [...localFilterOptions.productTypeId, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              productTypeId: [
                ...localFilterOptions.productTypeId.slice(0, localIndex),
                ...localFilterOptions.productTypeId.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.productTypeId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.productTypeId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.productTypeId.splice(index, 1);
        }
      } else if (action.payload[1] == "Sub-Category") {
        let localIndex = localFilterOptions.subCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              subCategoryId:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.subCategoryId, action.payload[0].id]
                  : [...localFilterOptions.subCategoryId, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              subCategoryId: [
                ...localFilterOptions.subCategoryId.slice(0, localIndex),
                ...localFilterOptions.subCategoryId.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.subCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.subCategoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.subCategoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Sub-Sub-Category") {
        let localIndex = localFilterOptions.subsubCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              subsubCategoryId:
                typeof action.payload[0] == "object"
                  ? [
                      ...localFilterOptions.subsubCategoryId,
                      action.payload[0].id,
                    ]
                  : [...localFilterOptions.subsubCategoryId, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              subsubCategoryId: [
                ...localFilterOptions.subsubCategoryId.slice(0, localIndex),
                ...localFilterOptions.subsubCategoryId.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.subsubCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.subsubCategoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.subsubCategoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Metal Colour") {
        // if (localIndex == -1) {
        localStorage.setItem(
          "localFilterOptions",
          JSON.stringify({
            ...localFilterOptions,
            metalColorId:
              typeof action.payload[0] == "object"
                ? [action.payload[0].id]
                : [action.payload[0]],
          })
        );
        // } else {
        //   localStorage.setItem(
        //     "localFilterOptions",
        //     JSON.stringify({
        //       ...localFilterOptions,
        //       metalColorId: [
        //         ...localFilterOptions.metalColorId.slice(0, localIndex),
        //         ...localFilterOptions.metalColorId.slice(localIndex + 1),
        //       ],
        //     })
        //   );
        // }

        let index = state.filterOptions?.metalColorId.length === 0;

        if (index) {
          state.filterOptions?.metalColorId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions.metalColorId =
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0];
        }
      } else if (action.payload[1] == "Location") {
        let localIndex = localFilterOptions.location.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              location:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.location, action.payload[0].id]
                  : [...localFilterOptions.location, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              location: [
                ...localFilterOptions.location.slice(0, localIndex),
                ...localFilterOptions.location.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.location.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.location.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.location.splice(index, 1);
        }
      } else if (action.payload[1] == "Classification") {
        let localIndex = localFilterOptions.classification.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              classification:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.classification, action.payload[0].id]
                  : [...localFilterOptions.classification, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              classification: [
                ...localFilterOptions.classification.slice(0, localIndex),
                ...localFilterOptions.classification.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.classification.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.classification.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.classification.splice(index, 1);
        }
      } else if (action.payload[1] == "Gender") {
        let localIndex = localFilterOptions.gender.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              gender:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.gender, action.payload[0].id]
                  : [...localFilterOptions.gender, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              gender: [
                ...localFilterOptions.gender.slice(0, localIndex),
                ...localFilterOptions.gender.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.gender.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.gender.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.gender.splice(index, 1);
        }
      } else if (action.payload[1] == "Selected Size") {
        let localIndex = localFilterOptions.size.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );

        if (localIndex == -1) {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              size:
                typeof action.payload[0] == "object"
                  ? [...localFilterOptions.size, action.payload[0].id]
                  : [...localFilterOptions.size, action.payload[0]],
            })
          );
        } else {
          localStorage.setItem(
            "localFilterOptions",
            JSON.stringify({
              ...localFilterOptions,
              size: [
                ...localFilterOptions.size.slice(0, localIndex),
                ...localFilterOptions.size.slice(localIndex + 1),
              ],
            })
          );
        }

        let index = state.filterOptions?.size.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.size.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          state.filterOptions?.size.splice(index, 1);
        }
      }
    },

    setStoreCategoryFilterId(state, action) {
      if (action.payload[1] == "Category") {
        let index = state.filterOptions?.categoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.categoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.categoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Product Type") {
        let index = state.filterOptions?.productTypeId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.productTypeId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.productTypeId.splice(index, 1);
        }
      } else if (action.payload[1] == "Sub-Category") {
        let index = state.filterOptions?.subCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.subCategoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.subCategoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Sub-Sub-Category") {
        let index = state.filterOptions?.subsubCategoryId.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.subsubCategoryId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.subsubCategoryId.splice(index, 1);
        }
      } else if (action.payload[1] == "Metal Colour") {
        let index = state.filterOptions?.metalColorId.length === 0;

        if (index) {
          state.filterOptions?.metalColorId.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions.metalColorId =
          //   typeof action.payload[0] == "object"
          //     ? action.payload[0].id
          //     : action.payload[0];
        }
      } else if (action.payload[1] == "Location") {
        let index = state.filterOptions?.location.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.location.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.location.splice(index, 1);
        }
      } else if (action.payload[1] == "Classification") {
        let index = state.filterOptions?.classification.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.classification.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.classification.splice(index, 1);
        }
      } else if (action.payload[1] == "Gender") {
        let index = state.filterOptions?.gender.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.gender.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.gender.splice(index, 1);
        }
      } else if (action.payload[1] == "Selected Size") {
        let index = state.filterOptions?.size.findIndex(
          (each) =>
            each ===
            (typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0])
        );
        if (index == -1) {
          state.filterOptions?.size.push(
            typeof action.payload[0] == "object"
              ? action.payload[0].id
              : action.payload[0]
          );
        } else {
          // state.filterOptions?.size.splice(index, 1);
        }
      }
    },

    setStoreSelectedFilterOptions(state, action) {
      if (action.payload[1] === "Selected Size") {
        let index = state.selectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (index == -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          // state.selectedFilters.splice(index, 1);
          // state.savedFilters.splice(index, 1);
        }
      } else if (action.payload[1] === "Metal Colour") {
        let index = state.selectedFilters.findIndex(
          (each) =>
            each === "yellow" ||
            each === "rose" ||
            each === "white" ||
            each === "yellow-rose"
        );

        if (index === -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          // state.selectedFilters.splice(index, 1);
          // state.savedFilters.splice(index, 1);
          // state.selectedFilters.push(action.payload[0]?.slug);
          // state.savedFilters.push([action.payload[0], action.payload[1]]);
        }
      } else {
        let index = state.selectedFilters.findIndex(
          (each) => each === action.payload[0]?.slug
        );

        if (index == -1) {
          state.selectedFilters.push(action.payload[0]?.slug);
          state.savedFilters.push([action.payload[0], action.payload[1]]);
        } else {
          // state.selectedFilters.splice(index, 1);
          // state.savedFilters.splice(index, 1);
        }
      }
    },

    setMountingEstimateStoneDetails(state, action) {
      state.estimateStoneDetails = action.payload;
    },
    setEstimateStoneDetails(state, action) {
      const index = state.estimateStoneDetails?.findIndex(
        (each) => each.id === action.payload[0]
      );
      state.estimateStoneDetails[index].stone_rate = action.payload[1];
    },
  },
});
export const {
  closePriceDetailsPopup,
  openPriceDetailsPopup,
  closeEstimatePriceDetailsPopup,
  openEstimatePriceDetailsPopup,
  closeProductDetailsPopup,
  openProductDetailsPopup,
  closeDigitalOutOfStockPopup,
  openDigitalOutOfStockPopup,
  setSelectedFilterOptions,
  setCategoryFilterId,
  setClearFilters,
  setFilterMaxPrice,
  setFilterMinPrice,
  setEstimateStoneDetails,
  setMountingEstimateStoneDetails,
  setClearMaxPrice,
  setClearMinPrice,
  setClearMetalColourFilters,
  setStoreCategoryFilterId,
  setStoreSelectedFilterOptions,
  setMountingMaxPriceFilter,
  setMountingMinPriceFilter,
} = catalogue.actions;
export default catalogue.reducer;
