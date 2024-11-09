import TechCard from "./components/TechCard"
import reactImage from "./assets/react.png";
import nodeImage from "./assets/node.jpg";
import mongoImage from "./assets/mongo.png";
import javaImage from "./assets/java.png";
import expressImage from "./assets/express.png";
import flutterImage from "./assets/flutter.webp";

function App() {

  const technologies = [
    {
      name : "React JS",
      image : reactImage,
      desc: "React, a JavaScript library for building user interfaces, is renowned for its component-based architecture. It simplifies the creation of dynamic and interactive web applications by breaking down UI into reusable components, making development efficient and maintainable."
    },
    {
      name : "Node JS",
      image : nodeImage,
      desc: "Node.js is a JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser. It's particularly well-suited for building server-side applications, APIs, and real-time applications."
    },
    {
      name : "Mongo DB",
      image : mongoImage,
      desc: "MongoDB is a popular NoSQL database that uses a flexible document-oriented data model. It's ideal for handling large volumes of unstructured data and offers high scalability and performance."
    },
    {
      name : "Express JS",
      image : expressImage,
      desc: "Express.js is a minimalist web framework for Node.js that provides a robust set of features for building web applications and APIs. It's known for its simplicity and efficiency."
    },
    {
      name : "Java",
      image : javaImage,
      desc: "Java is a versatile programming language used for a wide range of applications, from enterprise software to Android app development. It's known for its strong typing, object-oriented paradigm, and platform independence."
    },
    {
      name : "Flutter",
      image : flutterImage,
      desc: "Flutter is a UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop platforms from a single codebase. It's known for its fast development, beautiful UI, and performance."
    },
  ]

  return (
    <div className="bg-blue-100 h-full p-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Top Technologies of 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 mt-5">
        {technologies.map((ele) => {
          return(
            <TechCard 
              name={ele.name}
              image={ele.image}
              desc={ele.desc}
            />
          )
        })}
      </div>
      
    </div>
  )
}

export default App
