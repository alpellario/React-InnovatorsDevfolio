import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import './SkillsProjectsModal.css';
import './Carousel.css';
import Carousel from './Carousel';
import Carousel3d from './Carousel3D';
import VideoPlayer from './VideoPlayer';

import './image.css';

Modal.setAppElement('#root');

function ProjectDescription({ description }) {
  return <div className="project-description">{description}</div>;
}

const renderCustomSlide = item => {
  return (
    <div className="custom-slide-projects">
      <img src={item.original} />
    </div>
  );
};

const projectData = [
  {
    title: 'JIN&JOY Cafe & Inventory Management',
    description: (
      <div>
        <div className="project-description">
          <p>
            Jin&Joy Cafe & Inventory Management is a bespoke solution tailored
            to meet the unique needs of a cafe owner who sought an efficient way
            to manage their business. This comprehensive system not only allows
            the cafe owner to maintain precise control over their inventory but
            also empowers them to make informed decisions by calculating the
            profitability of individual products, such as pizzas, pastries, and
            desserts.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Inventory Management:</span> The heart of the system, this
              feature enables the creation and tracking of each product used
              within the cafe. Each product is meticulously cataloged, complete
              with its weight information. When the cafe makes a purchase, the
              system records it alongside the current price information.
            </li>
            <li>
              <span>Categorization:</span> Products can be categorized into
              specific areas within the cafe, such as the Kitchen Area, Alcol
              bar, or Hookah Bar. Additionally, each product can be allocated to
              either the warehouse or the cafe itself, offering unparalleled
              flexibility.
            </li>
            <li>
              <span>Transfer Tracking:</span> The system effortlessly monitors
              product transfers between the warehouse and the cafe. This feature
              ensures a seamless flow of inventory, guaranteeing that products
              are always where they are needed most.
            </li>
            <li>
              <span>Fixture Inventory:</span> Beyond just products, the system
              facilitates inventory counting and tracking of fixtures within the
              cafe. It's easy to keep tabs on cafe assets, ensuring efficient
              operations.
            </li>
            <li>
              <span>Returns and Repurchases:</span> In cases where purchased
              products are problematic, damaged, or expired, the system
              simplifies return and repurchase processes, helping the cafe owner
              actively manage their stock quality.
            </li>
            <li>
              <span>Cafe Management:</span> This section of the system is
              dedicated to the management of products destined for cafe
              customers. Creating new products is a breeze, requiring detailed
              content information. Product content is derived from items
              previously added to the stock in the Inventory Management section,
              allowing for precise tracking of current sales costs and profits.
            </li>
            <li>
              <span>Real-time Profit Calculation:</span> At the close of each
              business day, the system calculates the unit and total cost of all
              products sold, as well as the unit and total profit. This feature
              provides invaluable insights into the financial health of the
              cafe.
            </li>
            <li>
              <span>Sales and Cost Records:</span> The system maintains
              comprehensive records of all sales and costs, allowing for a
              retrospective analysis of the cafe's financial performance.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            Jin&Joy Cafe & Inventory Management empowers cafe owners to
            streamline their operations, reduce costs, and maximize
            profitability. With an intuitive interface and powerful features,
            this solution is designed to be an indispensable asset for cafe
            businesses, ensuring they have the tools needed to thrive in a
            competitive market.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/jin/home.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-home.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-createProduct.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-step1.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-step2.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-step3.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-checkproduct.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-listofproduct.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-productTransfer.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-error.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-orderAgain.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-pendingOrder.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-history.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-fixtureList.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-fixtureError.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-count.jpg'),
      },
      {
        original: require('../images/projects/jin/inventory-countPdf.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-home.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-rawMaterials.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-content.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-hotDetail.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-pogacaCost.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-pogacaCostDetails.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-salesSummary.jpg'),
      },
      {
        original: require('../images/projects/jin/cafe-salesSummaryDatail.jpg'),
      },

      // Add more images with their URLs and links
    ],
  },
  {
    title: 'Marina Cafe Table Management & Payment System',
    description: (
      <div>
        <div className="project-description">
          <p>
            Marina Cafe Table Management & Payment System is a robust solution
            designed to streamline cafe operations, offering efficient table
            management and seamless payment processing. This versatile system
            simplifies cafe management and enhances the dining experience.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Category-based Product Management:</span> Organize products
              effortlessly by defining categories and listing items with
              corresponding prices for quick and convenient ordering.
            </li>
            <li>
              <span>Floor and Table Configuration:</span> Customize the cafe's
              layout by specifying the number of floors and tables on each
              floor, providing a clear overview for efficient table allocation.
            </li>
            <li>
              <span>Session Management:</span> Keep daily operations organized
              with session management, ensuring an accurate record of cafe
              activities.
            </li>
            <li>
              <span>Intuitive Table Interface:</span> Seamlessly navigate
              through floors and tables with an intuitive interface. Perform
              actions like reserving tables, relocating diners, and merging
              tickets for a flexible dining experience.
            </li>
            <li>
              <span>Order Recording:</span> Easily record customer orders,
              ensuring accurate and efficient order management.
            </li>
            <li>
              <span>Flexible Payment Options:</span> Provide customers with
              payment flexibility, accepting payments as a lump sum or splitting
              bills for individual diners, whether by card or cash.
            </li>
            <li>
              <span>Payment Tracking:</span> Keep track of payment methods used
              throughout the day, differentiating between card and cash payments
              for precise financial tracking.
            </li>
            <li>
              <span>Rounding and Discount Capabilities:</span> Fine-tune table
              accounts with rounding options, apply discounts, or save payment
              types as needed, tailoring transactions to meet customer
              preferences.
            </li>
            <li>
              <span>Session Summary:</span> Access a comprehensive summary of
              all transactions within the session at the end of the day,
              facilitating daily reconciliation and ensuring accurate financial
              reporting.
            </li>
            <li>
              <span>Performance Insights:</span> Gain valuable insights into
              your cafe's financial performance with weekly and monthly revenue
              reports, allowing data-driven decisions to optimize operations.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            Marina Cafe Table Management & Payment System empowers cafe owners
            and staff to deliver exceptional service while efficiently managing
            cafe operations. With its user-friendly interface and comprehensive
            features, this system is the perfect solution to elevate efficiency
            and customer satisfaction.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/marinacafe/home.png'),
      },
      {
        original: require('../images/projects/marinacafe/saleScreen1.png'),
      },
      {
        original: require('../images/projects/marinacafe/saleScreen2.png'),
      },
      {
        original: require('../images/projects/marinacafe/saleScreen3.png'),
      },
      {
        original: require('../images/projects/marinacafe/saleScreen4.png'),
      },
      {
        original: require('../images/projects/marinacafe/takeaway.png'),
      },
      {
        original: require('../images/projects/marinacafe/table-order.png'),
      },
      {
        original: require('../images/projects/marinacafe/paymentclean.png'),
      },
      {
        original: require('../images/projects/marinacafe/partpayment2.png'),
      },
      {
        original: require('../images/projects/marinacafe/payment2.png'),
      },
      // Add more images with their URLs and links
    ],
  },
  {
    title: 'Marina Cafe QR Menu',
    description: (
      <div>
        <div className="project-description">
          <p>
            Marina Cafe QR Menu is a modern and versatile digital menu solution
            designed to enhance the dining experience for both customers and
            cafe owners. This sleek and user-friendly system offers a seamless
            way to explore a diverse menu, supporting multiple languages for a
            truly inclusive experience.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Multilingual Support:</span> Marina Cafe QR Menu is designed
              with global customers in mind. It offers multilingual support,
              allowing diners to view the menu in their preferred language.
            </li>
            <li>
              <span>Intuitive Interface:</span> The menu boasts an intuitive and
              easy-to-navigate interface. Customers can effortlessly browse
              through different categories, enabling swift access to a wide
              range of delicious offerings.
            </li>
            <li>
              <span>Real-Time Updates:</span> Cafe owners can maintain complete
              control over their menu items and prices with the Marina Cafe QR
              Menu. It provides a flexible system that empowers businesses to
              update product listings and pricing in real-time.
            </li>
            <li>
              <span>Customizable Design:</span> The system's design is adaptable
              to match the cafe's branding and ambiance.
            </li>
            <li>
              <span>QR Code Convenience:</span> To access the digital menu,
              customers simply scan a QR code with their smartphones. This
              contactless approach not only aligns with modern safety standards
              but also enhances the overall dining experience by reducing wait
              times.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            Marina Cafe QR Menu redefines how cafes interact with their
            customers and manage their menus. Its user-centric design,
            multilingual support, and real-time updates empower cafe owners to
            provide an exceptional dining experience. This innovative solution
            aligns with modern trends, offering both convenience and safety
            while dining. Elevate your cafe's services with Marina Cafe QR Menu,
            where technology meets culinary delight.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/marinacafeqr/home.png'),
      },
      {
        original: require('../images/projects/marinacafeqr/categories.png'),
      },
      {
        original: require('../images/projects/marinacafeqr/burgers.png'),
      },
      // Add more images with their URLs and links
    ],
  },
  {
    title: 'Hospital Doctor Appointment & Management System with RFID',
    description: (
      <div>
        <div className="project-description">
          <p>
            The Hospital Doctor Appointment System with RFID a practical and
            efficient software solution thoughtfully designed to streamline the
            healthcare appointment process. This system consists of three key
            modules, each serving a unique purpose to enhance the overall
            patient experience and optimize clinic operations.
          </p>
        </div>

        <div className="module">
          <h3>1. Patient Appointment Scheduling with RFID:</h3>
          <ul>
            <li>
              This module facilitates the assignment of doctor's appointments to
              patients seamlessly.
            </li>
            <li>
              Patients initiate the process by scanning their RFID cards,
              ensuring accurate identification and selection of their preferred
              doctor from the available slots.
            </li>
            <li>
              Administrative staff use this module to manage appointments
              efficiently.
            </li>
          </ul>
        </div>

        <div className="module">
          <h3>2. Doctor's Dashboard:</h3>
          <ul>
            <li>
              The doctor's screen provides a clear view of the patient queue,
              enabling physicians to review patient profiles and accept
              appointments.
            </li>
            <li>
              Doctors can also prescribe medications for accepted patients, with
              a unique code generated for each prescription.
            </li>
          </ul>
        </div>

        <div className="module">
          <h3>3. Prescription Retrieval:</h3>
          <ul>
            <li>
              Patients can access their prescribed medications by entering the
              unique code provided by the doctor.
            </li>
            <li>
              This module simplifies medication management and enhances patient
              understanding.
            </li>
          </ul>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Clinic Management:</span> Create and manage multiple clinics
              within the system, catering to various healthcare facilities.
            </li>
            <li>
              <span>Doctor Account Creation:</span> Establish individual doctor
              accounts, allowing for personalized scheduling and patient
              management.
            </li>
            <li>
              <span>Customized Working Hours:</span> Specify working days and
              hours for each doctor, ensuring precise appointment scheduling.
            </li>
            <li>
              <span>Effortless Patient Data Retrieval:</span> Automatically
              retrieve patient details upon RFID card scanning, reducing errors
              and improving efficiency.
            </li>
            <li>
              <span>RFID Integration:</span> Seamlessly integrate RFID
              technology for secure patient identification and appointment
              selection.
            </li>
            <li>
              <span>Streamlined Appointment Booking:</span> Administrative
              personnel can easily select the desired clinic, doctor, and
              available appointment slots, simplifying the booking process.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            The Hospital Doctor Appointment System with RFID is a practical tool
            designed to enhance healthcare operations, improve patient care, and
            reduce administrative burdens.
          </p>
        </div>
      </div>
    ),
    videoId: '3yyO6J7VvD4',
    images: [
      {
        original: require('../images/projects/hospital/home.jpg'),
      },
      {
        original: require('../images/projects/hospital/1.jpg'),
      },
      {
        original: require('../images/projects/hospital/2.jpg'),
      },
    ],
  },
  {
    title: 'Auto Gallery Management',
    description: (
      <div>
        <div className="project-description">
          <p>
            The Gallery Management System is a comprehensive software solution
            designed to address the specific needs of vehicle dealerships. This
            versatile program streamlines the process of managing vehicles, from
            acquisition to sale, ensuring efficient and organized operations.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Vehicle Registration:</span> Easily register vehicles in the
              gallery, whether from a new seller or a previously registered
              seller. Capture essential vehicle information, including whether
              it's new or second-hand.
            </li>
            <li>
              <span>Price Management:</span> Record the price of each purchased
              vehicle, maintaining accurate pricing details for future
              reference.
            </li>
            <li>
              <span>Inventory Control:</span> Store vehicles in the gallery's
              inventory, allowing for easy movement of vehicles between the
              gallery and the warehouse as needed.
            </li>
            <li>
              <span>Seller Flexibility:</span> Register vehicles without relying
              solely on vehicle dealers, providing flexibility in managing
              inventory sources.
            </li>
            <li>
              <span>Comprehensive Vehicle Listings:</span> Access a clear and
              concise gallery screen displaying all vehicles in stock, along
              with detailed vehicle information and photos for quick reference.
            </li>
            <li>
              <span>Inventory Management:</span> Effortlessly add or return
              vehicles to the warehouse directly from the gallery screen,
              optimizing inventory control.
            </li>
            <li>
              <span>Sales Documentation:</span> Document vehicle sales with
              buyer information, simplifying the process of keeping track of
              past transactions.
            </li>
            <li>
              <span>Advanced Search:</span> Quickly locate vehicles using search
              parameters such as license plate, model, brand, and year,
              enhancing efficiency when identifying specific vehicles.
            </li>
            <li>
              <span>Historical Data:</span> Access a database of past vehicle
              sales, purchases, customer records, and dealer information for
              informed decision-making.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            The Gallery Management System offers a user-friendly and efficient
            solution for vehicle dealerships, ensuring that the entire process,
            from acquisition to sale, is streamlined and well-organized. With
            its robust features and intuitive interface, this software
            simplifies day-to-day operations, empowering dealerships to provide
            excellent service to their customers.
          </p>
        </div>
      </div>
    ),
    videoId: 'MI3WlAsMAw0',
    images: [
      {
        original: require('../images/projects/cargallery/0.jpg'),
      },
      {
        original: require('../images/projects/cargallery/1.jpg'),
      },
      {
        original: require('../images/projects/cargallery/2.jpg'),
      },
      {
        original: require('../images/projects/cargallery/3.jpg'),
      },
    ],
  },
  {
    title:
      'AI Based Wildlife Detection and Roadway Safety System (Graduate thesis)',
    description: (
      <div>
        <div className="project-description">
          <p className="mb-6">
            My university graduation thesis represents a significant
            contribution to enhancing roadway safety and wildlife conservation.
            The project revolves around the development of an innovative system
            powered by a Convolutional Neural Network (CNN) that swiftly
            identifies wild animals prone to venturing onto roadways. It does so
            through strategically placed cameras in areas frequented by these
            animals. When an animal is detected, the system promptly notifies
            nearby vehicles traveling on the roadway. This notification includes
            crucial information such as the animal's species, the location of
            its entry onto the road, and the remaining distance to the animal.
          </p>
          <p>
            The CNN model used in this system was meticulously trained with an
            extensive dataset comprising approximately 700 images per animal
            className. These classes encompass a variety of wildlife species,
            including deer, foxes, pigs, chickens/roosters, sheep, cows, and
            horses.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Animal Detection:</span> The system employs cameras
              strategically positioned in wildlife-prone areas. These cameras
              continuously monitor the vicinity for animals venturing onto the
              roadway. When an animal is detected, the system proceeds to
              identify its species.
            </li>
            <li>
              <span>Notification to Nearby Vehicles:</span> Vehicles equipped
              with the system's mobile application receive immediate
              notifications about the detected animal. This crucial information
              empowers drivers to take proactive measures to avoid collisions,
              thereby ensuring the safety of both human commuters and wildlife.
            </li>
            <li>
              <span>Detailed Information:</span> The notification includes
              comprehensive details such as the species of the detected animal,
              the precise location of its entry onto the roadway, and the
              remaining distance to the animal. This data equips drivers with
              essential insights to respond effectively.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            In conclusion, my university graduation thesis represents a
            pioneering effort to harmonize transportation and wildlife
            conservation. By leveraging cutting-edge technology and advanced
            machine learning, this system not only enhances road safety but also
            contributes to the protection of vulnerable wildlife populations.
          </p>
        </div>
      </div>
    ),
    pdf: 'https://drive.google.com/file/d/1jvrWbFyaXD_xL8dAovWuHJs_tE4Qmlt1/preview',
  },
  {
    title: 'Whatsapp Clone Corporate Messaging',
    description: (
      <div>
        <div className="project-description">
          <p>
            An executive employed at a corporate organization commissioned a
            tailored solution to align with their specific requirements. The
            application exclusively facilitates messaging among computers
            interconnected within the same network. Design-wise, the executive
            requested that it mirror the user interface and functionalities of
            the WhatsApp application.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Secure Login:</span> Users log in to the messaging
              application using their unique usernames and passwords. This
              ensures secure access to their messaging accounts, even when
              changing computers or workstations within the company.
            </li>
            <li>
              <span>Flexible Accessibility:</span> Given the dynamic nature of
              corporate settings, employees can access the messaging application
              from any computer within the network. This flexibility enhances
              communication efficiency in a constantly evolving work
              environment.
            </li>
            <li>
              <span>One-on-One and Group Chat:</span> Users can engage in
              individual conversations or create group chats, mirroring the
              communication options available on popular messaging platforms
              like WhatsApp.
            </li>
            <li>
              <span>Profile Customization:</span> Just like WhatsApp, users can
              personalize their profiles by adding profile photos and status
              messages, allowing them to express themselves within the corporate
              network.
            </li>
            <li>
              <span>Blocking and Muting:</span> The application includes
              features for blocking and muting other users, providing
              individuals with control over their messaging experience.
            </li>
            <li>
              <span>Message Handling:</span> Users can receive, reply to, and
              forward messages seamlessly, mimicking the functionality of
              WhatsApp. This streamlined messaging process fosters efficient
              communication within the company.
            </li>
            <li>
              <span>Media Sharing:</span> The application supports the sharing
              of photos, enabling users to exchange visual information and
              enhance their messaging experience.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            The Corporate Messaging Solution caters to the specific
            communication needs of corporate environments. With secure login
            credentials, flexible accessibility, and a range of features akin to
            popular messaging apps, this tailored platform streamlines internal
            communication. It offers employees a reliable and efficient means of
            exchanging information and collaborating effectively within the
            company's network.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/wpclone/0.jpg'),
      },
      {
        original: require('../images/projects/wpclone/1.jpg'),
      },
      {
        original: require('../images/projects/wpclone/2.jpg'),
      },
      {
        original: require('../images/projects/wpclone/3.jpg'),
      },

      // Add more images with their URLs and links
    ],
  },
  {
    title: 'Card Brand & Model Detection with AI',
    description: (
      <div>
        <div className="project-description">
          <p>
            The Card Brand & Model Detection program is a custom-tailored
            solution designed to meet specific needs. Utilizing a convolutional
            neural network model, meticulously trained with a dataset comprising
            196 vehicle models and a total of 8145 vehicle images, this program
            achieves a remarkable 98% detection accuracy rate on the trained
            vehicle models.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Model Selection:</span> Users begin by selecting the
              pre-trained model from their computer. This selection process
              ensures that the program leverages the most relevant model for
              accurate detection.
            </li>
            <li>
              <span>Image Upload:</span> Users then upload an image of the
              vehicle they wish to identify.
            </li>
            <li>
              <span>Prediction:</span> Upon clicking the "Predict" button, the
              program swiftly analyzes the image. Detected vehicles are enclosed
              within a bounding rectangle, and the program displays the
              predicted vehicle brand and model information, accompanied by a
              confidence percentage.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            This application is engineered for precision, offering users a
            straightforward means to identify vehicle brands and models
            confidently.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/cardetect/1.jpg'),
      },
      {
        original: require('../images/projects/cardetect/2.jpg'),
      },

      // Add more images with their URLs and links
    ],
  },
  {
    title: 'Vehicle Meeting Request System',
    description: (
      <div>
        <div className="project-description">
          <p>
            The Vehicle Appointment system is a server-based solution designed
            to streamline the process of scheduling meetings for tools and
            resources managed by administrators. This efficient platform enables
            users to submit meeting requests for specific tools within the
            system. Administrators, in turn, have the capability to review and
            approve or decline these requests, ensuring efficient resource
            allocation.
          </p>
        </div>
      </div>
    ),
    pdf: 'https://drive.google.com/file/d/1XP1vUST0jtzAPPzV9byD-RfCc3nlXZ4l/preview',
  },
  {
    title: 'Refeere Article Management',
    description: (
      <div>
        <div className="project-description">
          <p>
            Referee Article Management is a robust server-based web project
            designed to facilitate the seamless handling of academic articles
            within a journal. This comprehensive system provides a structured
            platform for authors, editors, and referees to manage the
            submission, review, and approval process efficiently.
          </p>
        </div>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Author's Hub:</span> Authors can effortlessly upload their
              article PDFs to the system. PDFs are required to be under 2 MB in
              size to optimize database performance. Authors must provide a
              title and select a relevant article topic during the upload
              process. A dedicated "Article Tracking" page allows authors to
              monitor the status of their submissions, including approvals and
              rejections.
            </li>
            <li>
              <span>Report Access:</span> Authors can access and download
              referee reports for their accepted articles from the "My Reports"
              page.
            </li>
            <li>
              <span>Profile Management:</span> Authors have full control over
              their user profiles and password settings through the "My Profile"
              page.
            </li>
            <li>
              <span>Editor's Toolbox:</span> Editors have access to a "Referee"
              page to manage referees, including creation, updates, and removal.
              Editors can define journal topics and areas of interest for
              referees using the "Journal Topics" page. The "Pending Article"
              page allows editors to review and manage article submissions, with
              options to assign or reject articles.
            </li>
            <li>
              <span>Referee Assignments:</span> Editors can assign articles to
              referees based on their expertise and availability. Referees
              receive email notifications with assignment details. Accepted
              assignments are marked "On Referee Approval," and the status is
              visible to authors.
            </li>
            <li>
              <span>Referee Interaction:</span> Referees have a dedicated
              "Pending Appointments" page to review and respond to assigned
              articles. Responses can be "Accept" or "Reject," with a 5-day
              response window. Accepted articles are marked "Approved" and
              visible to authors.
            </li>
            <li>
              <span>Referee Reports:</span> Referees can upload final reports
              for assigned articles within 14 days through the "My Assignments"
              page. A "My Past Reports" page allows referees to review
              previously evaluated articles and reports.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            Referee Article Management streamlines the academic article
            submission and review process, enhancing efficiency and transparency
            for all stakeholders involved in journal publication.
          </p>
        </div>
      </div>
    ),

    pdf: 'https://drive.google.com/file/d/1GtL40OSgvuvJ4jaT6nVQT5PO7MyffI-e/preview',
  },
  {
    title: 'Personal Data Science Utility',
    description: (
      <div>
        <div className="project-description">
          <p>
            This straightforward application is purpose-built to support
            individual data science and machine learning endeavors. It
            streamlines several essential tasks associated with dataset
            management, preparation, and analysis.
          </p>
        </div>
        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span>Effortless Dataset Management:</span> This utility allows
              for the seamless loading of datasets, data preprocessing, and
              feature extraction operations.
            </li>
            <li>
              <span>Data Visualization:</span> The program provides graphical
              representations of datasets, aiding in the visualization of data
              distribution and patterns.
            </li>
            <li>
              <span>Data Splitting:</span> This tool facilitates the division of
              datasets into training and testing subsets, a crucial step in
              model development.
            </li>
            <li>
              <span>Classification and Regression:</span> The application
              includes functionalities for classification and regression tasks,
              supporting the creation and evaluation of machine learning models.
            </li>
            <li>
              <span>Neural Network Experimentation:</span> Users can experiment
              with the development and training of simple neural networks.
            </li>
          </ul>
        </div>

        <div className="outcome">
          <p>
            This tailored data science utility is developed to meet specific
            requirements and serves as a practical tool for data manipulation,
            analysis, and the exploration of machine learning techniques in
            personal projects.
          </p>
        </div>
      </div>
    ),
    images: [
      {
        original: require('../images/projects/basictraining/0.jpg'),
      },
      {
        original: require('../images/projects/basictraining/1.jpg'),
      },
      {
        original: require('../images/projects/basictraining/2.jpg'),
      },
    ],
  },
  // Add more projects
];

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(4px)',
  },
  content: {
    padding: '0 0 0 0',
    backgroundColor: '#F8F8F8',
    color: '#333333',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    border: 'none',
    top: '50%',
    left: '50%',

    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    height: '90vh',
  },
};
const Card = ({ path }) => (
  <img
    src={require(`../images/projects/${path}/logo.jpg`)}
    alt={`${path} logo`}
    className="logo"
  />
);
const ProjectModal = ({ closeProjectsModal, projectModalIsOpen }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [projectImages, setProjectImages] = useState([projectData[0].images]);

  const changeActiveProject = projectId => {
    setActiveProject(projectId);
  };

  useEffect(() => {
    loadProjectDetails(activeProject);
  }, [activeProject]);

  const loadProjectDetails = projectId => {
    // Fetch project details based on the activeProject index
    const projectDetails = projectData[projectId];

    // Update the project title and description
    const projectTitleElement = document.querySelector('.project-title');
    const projectDescriptionElement = document.querySelector(
      '.project-descriptions'
    );

    if (projectTitleElement && projectDescriptionElement) {
      projectTitleElement.textContent = projectDetails.title;
      projectDescriptionElement.innerHTML = projectDetails.description;
    }

    setProjectImages(projectDetails.images || []);
  };

  return (
    <Modal
      isOpen={projectModalIsOpen}
      onRequestClose={closeProjectsModal}
      style={customStyles}
      closeTimeoutMS={300}
    >
      <div className="modal">
        <div className="modal__exit-wrapper" onClick={closeProjectsModal}>
          <GrClose className="modal__exit" />
        </div>
        <div className="modal__body">
          <div className="project-carousel">
            {/* <Carousel changeActiveProject={changeActiveProject}>
              <Card path="jin" id="0" />
              <Card path="marinacafe" id="1" />
              <Card path="marinacafeqr" id="2" />
              <Card path="hospital" id="3" />
              <Card path="cargallery" id="4" />
              <Card path="animaldetect" id="5" />
              <Card path="wpclone" id="6" />
              <Card path="cardetect" id="7" />
              <Card path="carmeeting" id="8" />
              <Card path="refeerearticle" id="9" />
              <Card path="basictraining" id="10" />
            </Carousel> */}
            <Carousel3d changeActiveProject={changeActiveProject} />
          </div>
          <div className="project-details">
            <div className="project-title">
              {projectData[activeProject].title}
            </div>
            <ProjectDescription
              description={projectData[activeProject].description}
            />
            {projectData[activeProject].videoId ? (
              <div className="video">
                <VideoPlayer videoId={projectData[activeProject].videoId} />
              </div>
            ) : (
              ''
            )}
            {projectData[activeProject].images ? (
              <div className="project-images">
                <ImageGallery
                  items={projectImages}
                  renderItem={renderCustomSlide}
                  additionalClass="custom-gallery"
                  showThumbnails={false}
                  showBullets={true}
                  infinite={false}
                  lazyLoad={true}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={true}
                />
              </div>
            ) : (
              ''
            )}
            {projectData[activeProject].pdf ? (
              <div>
                <div className="pdf-title">Project Documentation</div>
                <iframe
                  src={projectData[activeProject].pdf}
                  width="100%"
                  height="900px"
                  allow="autoplay"
                  className="pdf"
                ></iframe>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* <button onClick={closeProjectsModal}>close</button> */}
      </div>
    </Modal>
  );
};

export default ProjectModal;
