import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/newslater";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt="about us"
        />
        <div className="flex flex-col justify center gap-6 md:w-2/4 text-gray-600">
          <p>
            This is a shopping website for all the shoppers to buy the products.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            ad sint? Voluptatibus praesentium esse debitis corporis soluta
            incidunt. Cumque obcaecati minus non facilis. Blanditiis, dolor
            dolores eveniet voluptatibus error optio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sequi.
            Aliquam earum explicabo porro, ratione blanditiis laudantium animi,
            similique asperiores sit temporibus quis unde sequi saepe ex, eaque
            aliquid at.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            expedita, architecto necessitatibus, nostrum modi voluptatum nihil
            illo consequuntur libero natus hic incidunt sequi at perspiciatis.
            At exercitationem laboriosam suscipit eum.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, quis consequuntur commodi quas hic autem explicabo
            laboriosam. Eius, numquam totam magni voluptates amet dolore ipsam
            aspernatur est? Modi, quo itaque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, quis consequuntur commodi quas hic autem explicabo
            laboriosam. Eius, numquam totam magni voluptates amet dolore ipsam
            aspernatur est? Modi, quo itaque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, quis consequuntur commodi quas hic autem explicabo
            laboriosam. Eius, numquam totam magni voluptates amet dolore ipsam
            aspernatur est? Modi, quo itaque.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
