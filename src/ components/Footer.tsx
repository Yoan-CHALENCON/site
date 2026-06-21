export default function Footer() {
  return (
    <footer className="border-dark/30 dark:border-light/30 border-t py-5">
      <p className="text-dark/50 dark:text-light/50 text-center text-sm">
        &copy; 2023 &ndash; {new Date().getFullYear()} &mdash; Tous droits
        réservés &mdash; Conçu et développé par Yoan CHALENCON
      </p>
    </footer>
  );
}
