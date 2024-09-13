import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ListItem = ({
  item,
  handleDeleteItem,
  handleEditItem,
  handleItemStatusChange,
}) => {
  return (
<Accordion
  style={{
    margin: "10px 5%",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  }}
>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel-content"
    id="panel-header"
    style={{
      backgroundColor: "#e0f7fa",
      borderBottom: "1px solid #ddd",
      fontWeight: "bold",
      fontSize: "1.1rem",
    }}
  >
    {item.title}
  </AccordionSummary>
  <AccordionDetails
    style={{
      padding: "15px",
      fontSize: "0.95rem",
      lineHeight: "1.5",
      color: "#333",
      backgroundColor: "#fff",
    }}
  >
    {item.description}
  </AccordionDetails>
  <AccordionActions
    style={{
      backgroundColor: "#f0f0f0",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <Button
      onClick={() => handleEditItem(item)}
      style={{
        color: "#00796b",
        fontWeight: "bold",
        marginRight: "10px",
        textTransform: "none",
      }}
    >
      Edit
    </Button>
    <Button
      onClick={() => handleItemStatusChange(item)}
      style={{
        color: "#0288d1",
        fontWeight: "bold",
        marginRight: "10px",
        textTransform: "none",
      }}
    >
      Change Status
    </Button>
    <Button
      onClick={() => handleDeleteItem(item)}
      style={{
        color: "#d32f2f",
        fontWeight: "bold",
        textTransform: "none",
      }}
    >
      Delete
    </Button>
  </AccordionActions>
</Accordion>

  );
};

export default function RenderItems({
  status,
  itemList,
  handleDeleteItem,
  handleEditItem,
  handleItemStatusChange,
}) {
  const filteredItems = itemList && itemList.filter((item) => item.status === status);

  return (
    <div style={{ marginBottom: "20px" }}>
      {itemList && filteredItems.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
          handleItemStatusChange={handleItemStatusChange}
        />
      ))}
    </div>
  );
}
