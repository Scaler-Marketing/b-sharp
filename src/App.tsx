import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = lazy(() => import("./pages/Index.tsx"));
const Weddings = lazy(() => import("./pages/Weddings.tsx"));
const PhotoBooths = lazy(() => import("./pages/PhotoBooths.tsx"));
const CorporateEvents = lazy(() => import("./pages/CorporateEvents.tsx"));
const AboutBSharp = lazy(() => import("./pages/AboutBSharp.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="overflow-x-clip">
          <ScrollToTop />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/weddings" element={<Weddings />} />
              <Route path="/photo-booths" element={<PhotoBooths />} />
              <Route path="/corporate-events" element={<CorporateEvents />} />
              <Route path="/about" element={<AboutBSharp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
