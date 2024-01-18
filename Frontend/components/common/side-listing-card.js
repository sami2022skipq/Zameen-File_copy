const SideListingCard = () => {
  const Data = [
    {
      title: "Popular searches",
      data: [
        "Properties for sell",
        "Plot for sell",
        "Plot file for sell",
        "Offices for rent",
        "Retail spaces for rent",
        "Warehouses for rent",
        "Villas for sell",
        "Showrooms for rent",
        "Labor camps for rent",
        "Staff accommodation for rent",
      ],
    },
    {
      title: "Nearby Areas",
      data: [
        "Properties for sell in Islamabad",
        "Plot for sell in Rawalpindi",
        "Plot for sell in Rawalpindi",
        "Plot for sell in Abbottabad",
        "Plot for sell in Murree",
        "House for sell in Islamabad",
        "House for rent in Rawalpindi",
        "Plot for sell in Rawalpindi",
        "Properties for sell in Islamabad",
        "Plot for sale in Rawalpindi",
        "Plot for sell in Islamabad",
        "Plot for sell in Rawalpindi",
        "House for sell in Islamabad",
        "House for rent in Rawalpindi",
        "Plot for sell in Rawalpindi",
      ],
    },
  ];
  return (
    <div className="w-full bg-high-light-gray rounded-sm p-5 text-gray-500">
      {Data.flatMap((item, idx) => {
        return (
          <div
            key={idx}
            className={`${
              idx === Data.length - 1 ? "mb-36" : "mb-14"
            } space-y-5`}
          >
            <p className="font-semibold text-base">{item.title}</p>
            {item.data.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className="cursor-pointer space-y-0.5 group"
                >
                  <p>{data}</p>
                  <div className="w-0 h-[1px] transition-all duration-500 bg-gray-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SideListingCard;
