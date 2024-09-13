import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./styles/TodoList.css";
import { Typography } from "@mui/material";
import BlinkingCircle from "./BlinkingCircle";
import RenderItems from "./RenderItems";
import AddTodoDialog from "./AddTodoDialog";
import ConfirmationBox from "./ConfirmationBox";
import { getUserTodo, updateUserTodo } from "../functions/UserChats";

export default function TodoList() {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    const list = getUserTodo();
    if(list){
      setItemList(list);
    }
  }, [])

  useEffect(() => {
    if(itemList != null) {
      updateUserTodo(itemList)
    }
  }, [itemList])
  
  // Delete Item Section
  const [viewConfirmationBox, setViewConfirmationBox] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [confirmationBoxLabel, setConfirmationBoxLabel] = useState(null);

  const handleCloseDialog = () => {
    setViewConfirmationBox(false);
  };

  const handleDeleteItem = (itemToDelete) => {
    setConfirmationBoxLabel("DELETE");
    setItemSelected(itemToDelete);
    setViewConfirmationBox(true);
  };

  const confirmDeleteItem = () => {
    if (itemSelected) {
      setItemList(itemList.filter((item) => item.id !== itemSelected.id));
      setItemSelected(null);
      setConfirmationBoxLabel(null);
    }
    handleCloseDialog();
  };

  // Add Item Section
  const [viewAddItemDialog, setViewAddItemDialog] = useState(false);
  const toggleDialogView = () => {
    setViewAddItemDialog(!viewAddItemDialog);
  };

  const confirmAddItem = (values) => {
    if (values.id != "") {
      const updatedItemList = itemList.map((item) =>
        item.id === values.id
          ? {
              ...item,
              title: values.itemTitle,
              description: values.itemDescription,
            }
          : item
      );
      setItemList(updatedItemList);
      setSelectedItem(null);
    } else {
      const newItem = {
        id: itemList.length + 1,
        status: "Open",
        title: values.itemTitle,
        description: values.itemDescription,
      };
      setItemList([...itemList, newItem]);
    }
    toggleDialogView();
  };

  // Edit Item Section
  const [selectedItem, setSelectedItem] = useState(null);
  const handleEditItem = (item) => {
    setSelectedItem(item);
    toggleDialogView();
  };

  // Change Status of Item
  const handleItemStatusChange = (item) => {
    setConfirmationBoxLabel("UPDATE");
    setItemSelected(item);
    setViewConfirmationBox(true);
  };

  const confirmStatusUpdateItem = () => {
    if (itemSelected) {
      const updatedItemList = itemList.map((item) => {
        if (item.id === itemSelected.id) {
          return {
            ...item,
            status: item.status === "Open" ? "Closed" : "Open",
          };
        }
        return item;
      });

      setItemList(updatedItemList);
      setItemSelected(null);
      setConfirmationBoxLabel(null);
    }
    handleCloseDialog();
  };

  return (
    <div className="listContainer">
      <div className="addTodoButtonContainer">
        <button className="addTodoButton" onClick={toggleDialogView}>
          <AddIcon />
          <p> ADD TODO </p>
        </button>
      </div>
      <div className="listItemContainer">
        <div className="listItemOpenItems">
          <div className="listHeader">
            <BlinkingCircle color={"#F2994A"} />
            <Typography> Open Items </Typography>
          </div>
          <RenderItems
            status="Open"
            itemList={itemList}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
            handleItemStatusChange={handleItemStatusChange}
          />
        </div>
        <div className="listItemCloseItems">
          <div className="listHeader">
            <BlinkingCircle color={"#6FCF97"} />
            <Typography> Completed Items </Typography>
          </div>
          <RenderItems
            status="Closed"
            itemList={itemList}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
            handleItemStatusChange={handleItemStatusChange}
          />
        </div>
      </div>

      <ConfirmationBox
        boxLabel={confirmationBoxLabel}
        viewBox={viewConfirmationBox}
        handleClose={handleCloseDialog}
        itemSelected={itemSelected}
        confirmOperation={
          confirmationBoxLabel == "DELETE"
            ? confirmDeleteItem
            : confirmStatusUpdateItem
        }
      />

      <AddTodoDialog
        viewDialog={viewAddItemDialog}
        handleClose={toggleDialogView}
        confirmAddItem={confirmAddItem}
        selectedItem={selectedItem}
      />
    </div>
  );
}
