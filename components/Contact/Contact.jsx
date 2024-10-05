import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className={styles.contactMeWrapper}>
      <motion.div
        className={styles.sendRecs}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className={styles.sendTitle}>
            <span style={{ color: "#ff6600" }}>SEND</span>
            <span style={{ color: "#33cc00" }}> YOUR</span>
            <span style={{ color: "#cc0000" }}> RECOMMENDATIONS</span>
          </p>
        </div>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className={styles.formWrapper}>
        <motion.div
          className={styles.imgWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../pics/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          className={styles.fancyForm}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/a0931bbe2e3f72acded1e998b1b6679a"
            method="POST"
          >
            <input
              className={styles.name}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className={styles.hugeError}>
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters"}
              </p>
            )}

            <input
              className={styles.email}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className={styles.hugeError}>
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}

            <textarea
              className={styles.bigMessage}
              type="text"
              placeholder="MESSAGE"
              rows="8"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className={styles.hugeError}>
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters"}
              </p>
            )}

            <div className={styles.btnWrapper}>
              <button type="submit" className={styles.sendBtn}>
                SEND ME A MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
