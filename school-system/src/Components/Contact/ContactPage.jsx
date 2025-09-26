import React from "react";
import { motion } from "motion/react";
import schoolbook from "/src/assets/school-holidays-7321732_1280.jpg";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const tapEffect = {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const inputFocusEffect = {
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.2 },
  };

  return (
    <>
      <motion.div
        className="mx-auto flex flex-col md:flex-row justify-between rounded-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side (Form + Text) */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-8"
          variants={containerVariants}
        >
          <motion.div className="p-6">
            <motion.h1
              className="text-gray-600 text-start md:text-left mt-5 font-medium text-4xl mb-4"
              variants={itemVariants}
            >
              Contact{" "}
              <motion.span
                className="text-gray-600"
                // animate={{
                //   color: ["#3b82f6", "#1d4ed8", "#3b82f6"],
                // }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Our School
              </motion.span>
            </motion.h1>

            <motion.p
              className="md:text-start text-start text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              variants={itemVariants}
            >
              Your learning starts here.
            </motion.p>

            <motion.h2
              className="md:text-start text-start  mt-5 text-gray-600 font-light"
              variants={itemVariants}
            >
              Have questions or need assistance? Our team is always ready to
              help. Whether it’s admissions, inquiries, or support, we’d love to
              hear from you!
            </motion.h2>
          </motion.div>

          {/* Form */}
          <motion.div
            className="w-full max-w-md p-6"
            variants={containerVariants}
          >
            <motion.form
              className="flex flex-col space-y-6"
              variants={containerVariants}
            >
              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="Uname"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name*
                </label>
                <motion.input
                  type="text"
                  id="Uname"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                  placeholder="Enter your Full Name"
                  whileFocus={inputFocusEffect}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="Phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number*
                </label>
                <motion.input
                  type="text"
                  id="Phone"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                  placeholder="Enter your phone number"
                  whileFocus={inputFocusEffect}
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="Email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email*
                </label>
                <motion.input
                  type="email"
                  id="Email"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                  placeholder="Enter your email"
                  whileFocus={inputFocusEffect}
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="Subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="Subject"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                  placeholder="Enter subject"
                  whileFocus={inputFocusEffect}
                />
              </motion.div>

              {/* Question */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="Question"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Question
                </label>
                <motion.textarea
                  type="text"
                  id="Question"
                  className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-serif"
                  placeholder="Enter your question"
                  whileFocus={inputFocusEffect}
                />
              </motion.div>

        
              {/* Submit */}
              <motion.div
                className="mt-2"
                variants={itemVariants}
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <motion.button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 shadow-md cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [10, 0],
                  }}
                  transition={{
                    delay: 0.8,
                    y: {
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{
                    scale: 0.98,
                    boxShadow: "0 2px 5px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  Submit
                </motion.button>

                <motion.p
                  className="mt-10 text-gray-700 text-sm"
                  variants={itemVariants}
                >
                  Need Help?{" "}
                  <span className="text-gray-600 font-sans text-base">
                    Contact school for support!
                  </span>
                </motion.p>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.7,
              type: "spring",
              stiffness: 1000,
              damping: 10,
            },
          }}
        >
          <motion.img
            src={schoolbook}
            alt="school book"
            className="w-full object-cover shadow-lg brightness-75"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.4,
                type: "spring",
                stiffness: 60,
                damping: 10,
              },
            }}
          />
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default ContactPage;
