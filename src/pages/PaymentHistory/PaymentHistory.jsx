const PaymentHistory = () => {
  return (
    <div className="mx-auto w-[87%] my-32">
      <h2 className="text-2xl font-semibold my-12">Total Payments</h2>
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr className="text-black font-semibold text-base">
              <th>#</th>
              <th>Price</th>
              <th>Transaction id</th>
              <th>date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-400 font-medium">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>pending</td>
            </tr>
            <tr className="text-gray-400 font-medium">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Pending </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
