import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import glance from "../../../assets/glance.png";
import "./PaymentHistory.css";

// Function to format the date
const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // Use the useQuery hook to fetch payment data
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email], // Include user email in the query key
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <section className="py-20 section-bg w-full">
      <Helmet>
        <title>Foodie's Paradise | Payment History</title>
      </Helmet>
      <SectionTitle subHeading={glance} heading={"PAYMENT HISTORY"} />
      <div className="mycart-total">
        <div className="font-bold uppercase flex justify-between mt-16 items-center">
          <h5 className="text-2xl text">Total Payments: {payment.length}</h5>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item, index) => (
                <tr key={item._id} className="table-border">
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>${item.price}</td>
                  <td>{formatDate(item.date)}</td> {/* Format the date here */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
