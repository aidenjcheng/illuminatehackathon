import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export default function Home() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-5/6 h-5/6 m-auto bg-white rounded-lg"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Model</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            This model is a ResNet50-based deep learning CNN specifically
            trained for multi-class classification, designed to identify and
            differentiate between four types of brain tumors using a dataset of
            20,000 images. It leverages advanced image processing and
            GPU-accelerated computing to deliver highly accurate predictions
            with confidence scores.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who are the creators?</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            100% of everything you see was coded by 2 high schoolers, from the
            ResNet50 deep learning CNN configured for multi-class classification
            model to the Python Flask API to the beautiful landing page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How is the image preprocesed?</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            Resizing, center cropping, and normalization are done to prepare
            input images for analysis. This ensures that every scan is optimally
            conditioned for the neural network, enhancing the model's ability to
            accurately recognize and classify various types of brain tumors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Multi-class Classification with Confidence Scoring
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            Beyond detecting the presence of tumors, the system intelligently
            differentiates between different tumor types (Normal, Glioma,
            Meningioma, Pituitary) and quantifies its certainty in each
            diagnosis through confidence scores. This not only provides clear,
            actionable insights but also underscores the model's reliability and
            the nuanced understanding of its neural network.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Python Flask API</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            Powered by a Flask-based backend, the software features a
            responsive, scalable API that handles image uploads and returns
            predictions in real-time. This modern web framework ensures seamless
            integration and communication with web platforms, enabling easy
            access to the neural network's capabilities through a simple,
            user-friendly interface. The API implements CORS policy to securely
            manage requests from various origins.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What tools were used?</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            While making this application, we learned a lot of new technologies.
            In this project, we used GSAP (Green Sock Animation Platform),
            including its ScrollTrigger plugin, Tailwind CSS, React, and ShadCN
            UI Library to create the website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Who did what?</AccordionTrigger>
          <AccordionContent className="text-base opacity-70">
            Aiden Cheng worked on the front-end development of the project,
            while Kevin Xia worked on the back-end development of the project.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
