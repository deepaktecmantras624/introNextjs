// "use client";

import { useWishlist } from "../context/WishlistContext";

import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Link from "next/link";


const dashboard = ({ products }) => {
  console.log("🚀 ~ file: page.jsx:4 ~ page ~ products:", products);
 

  const { addToWishlist, added } = useWishlist();
  console.log("🚀 ~ file: dashboard.js:16 ~ dashboard ~ added:", added)
  console.log("🚀 ~ file: dashboard.js:16 ~ dashboard ~ addToWishlist:", addToWishlist)

  // const [wishlist, setWishList] = useState([]);

  // const handleWishlist = async (product) => {
  //   console.log("🚀 ~ file: dashboard.js:12 ~ handleWishlist ~ product:", product)
  //   setWishList([...wishlist, product]);
  //   console.log("🚀 ~ file: dashboard.js:14 ~ handleWishlist ~ wishlist:", wishlist)
  // };
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Dashboard</h1>

        <Link
          href="/wishlist"
          style={{ textDecoration: "none", color: "teal" }}
        >
          Go to Wishlist
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          margin: "auto",
          // border: "1px solid blue",
          width: "80%",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "48px",
        }}
      >
        {products &&
          products.map((p) => {
            const isAdded = added[p.id]
            return (
              <div
                key={p.id}
                style={{
                  width: "auto",
                  // border: "1px solid red",
                  padding: "85px",
                  textAlign: "center",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  // style={{ width: "100%", marginBottom: "10px" }}
                  className="w-full mb-[10px] h-64"
                />
                <h4 style={{ fontSize: "18px", marginBottom: "8px", fontWeight:"800" }}>
                  Title:{p.title}
                </h4>
                <h5 style={{ color: "teal", marginBottom: "12px", fontSize:"18px" }}>
                  Price:₹{p.price}
                </h5>
                <button
                  onClick={() => {
                    addToWishlist(p);
                    toast.success('Item added successfully', {
                      position: 'top-right',
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                    
                  }}
                  style={{
                    backgroundColor: isAdded ? "teal" :"red",
                    color: 'white',
                    cursor: isAdded ?"not-allowed":'pointer',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '8px 16px',
                    
                  }}
                >
                  {isAdded ? "Added Successfully" : "Add to Wishlist"}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};    

export const getServerSideProps = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  console.log(
    "🚀 ~ file: page.jsx:33 ~ serverSideProps ~ response.data:",
    response.data
  );

  return {
    props: {
      products,
    },
  };
};
export default dashboard;
