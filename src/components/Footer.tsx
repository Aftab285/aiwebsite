export function Footer() {
  return (
    <footer className="bg-blue-900 py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <img
            src="/assets/logo-prompted.png"
            alt="Prompted"
            className="h-8 brightness-0 invert opacity-90"
          />
          <p className="text-sm text-neutral-500">
            &copy; 2025 Prompted. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
