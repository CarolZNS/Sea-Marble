import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: "pede ac",
      content: "deploy customized action-items",
    },
    {
      label: "dui luctus rutrum",
      content: "scale bleeding-edge experiences",
    },
    {
      label: "nisl duis",
      content: "empower virtual models",
    },
    {
      label: "integer",
      content: "grow collaborative e-business",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
