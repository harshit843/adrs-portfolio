function Footer() {
  return (
    <footer
      className="text-center py-6"
      style={{
        backgroundColor: "var(--bg-card)",
        color: "var(--text-muted)",
      }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} ADRS Techno. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;