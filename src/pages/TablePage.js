import Table from "../components/Table";

export default function TablePage() {
  const data = [
    { value: "Apple", price: 4, weight: 6650 },
    { value: "Orange", price: 2, weight: 11000 },
    { value: "Grape", price: 6, weight: 1200 },
    { value: "Blueberry", price: 10, weight: 1230 },
    { value: "Lemon", price: 32, weight: 1785 },
  ];

  const template = [
    {
      label: "Name",
      sortValue: (item) => item.value,
    },
    {
      label: "Location",
    },
    {
      label: "Weigth (g)",
      sortValue: (item) => item.weight,
    },
  ];

  const dataTwo = [
    {
      Animal: "Ardea cinerea",
      Year: 2000,
      Avatar: "https://robohash.org/providentvelitnon.png?size=50x50&set=set1",
    },
    {
      Animal: "Sciurus vulgaris",
      Year: 1992,
      Avatar:
        "https://robohash.org/nontemporibuseligendi.png?size=50x50&set=set1",
    },
    {
      Animal: "Drymarchon corias couperi",
      Year: 2012,
      Avatar:
        "https://robohash.org/facilisfugiatdebitis.png?size=50x50&set=set1",
    },
  ];
  const templateTwo = [
    {
      label: "Animal Name",
      sortValue: (item) => item.Animal,
    },
    {
      label: "Year",
      sortValue: (item) => item.Year,
    },
    {
      label: "Avatar",
    },
  ];

  return (
    <div>
      <Table data={data} template={template} />
      <Table data={dataTwo} template={templateTwo} className='my-5' />
    </div>
  );
}
