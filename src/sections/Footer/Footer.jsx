import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; Avinash kumar <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
