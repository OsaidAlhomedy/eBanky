import React from "react";

function Dashboard({ user, transactions }) {
  const getTotalBalance = () => {
    let total = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "deposit") {
        total += transaction.amount;
      } else {
        total -= transaction.amount;
      }
    });
    return `${total}$`;
  };
  const parseDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  return (
    <div className="w-screen h-fit flex justify-center overflow-x-hidden mb-14">
      <div className="w-full md:w-3/4 h-fit md:border-x-2 border-dark flex flex-col">
        <div class="bg-dark">
          <div className="text-white m-10">
            <p className="mt-5 text-xl">{user?.name}</p>
            <p className="mt-5 text-xl">
              Account Balance : {transactions && getTotalBalance()}
            </p>
          </div>
        </div>
        <div className="bg-dark border-t-2">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr className="">
                        <th
                          scope="col"
                          className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions?.map((transaction) => (
                        <tr
                          className={
                            transaction.type == "deposit"
                              ? "bg-green-400 border-b"
                              : "bg-red-400 border-b"
                          }
                        >
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {transaction.amount}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {parseDate(transaction.date)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {transaction.type}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
