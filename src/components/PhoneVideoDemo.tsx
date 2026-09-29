import React, { useState } from 'react';
import { 
  TrendingUp, 
  Store, 
  Truck, 
  Megaphone, 
  Star, 
  Check, 
  Copy, 
  ExternalLink, 
  DollarSign, 
  ShieldCheck, 
  Flame,
  ArrowRight,
  Eye,
  ShoppingBag,
  Zap,
  Percent
} from 'lucide-react';

interface WinningProduct {
  id: string;
  name: string;
  category: string;
  sourcePrice: number;
  sellPrice: number;
  profit: number;
  orders: string;
  supplierLocation: string;
  adAngle: string;
}

const WINNING_PRODUCTS: WinningProduct[] = [
  {
    id: 'wp1',
    name: 'Sunset RGB Projection Atmosphere Lamp',
    category: 'Home & Room Decor',
    sourcePrice: 140,
    sellPrice: 799,
    profit: 659,
    orders: '14,200+ sold',
    supplierLocation: 'Delhi / Surat Hub',
    adAngle: 'Instagram aesthetic transformation reel',
  },
  {
    id: 'wp2',
    name: 'Portable Mini Thermal Pocket Printer',
    category: 'Gadgets & Students',
    sourcePrice: 420,
    sellPrice: 1499,
    profit: 1079,
    orders: '9,800+ sold',
    supplierLocation: 'Mumbai Electronic Market',
    adAngle: 'Study notes & cute journaling TikTok hook',
  },
  {
    id: 'wp3',
    name: 'EMS Microcurrent Face Sculptor & Massager',
    category: 'Beauty & Skincare',
    sourcePrice: 190,
    sellPrice: 999,
    profit: 809,
    orders: '22,400+ sold',
    supplierLocation: 'Delhi Hub (COD Friendly)',
    adAngle: 'Before/after 5-minute jawline contour demo',
  },
  {
    id: 'wp4',
    name: 'Anti-Theft Waterproof Crossbody Sling Bag',
    category: 'Fashion & Travel',
    sourcePrice: 210,
    sellPrice: 899,
    profit: 689,
    orders: '11,100+ sold',
    supplierLocation: 'Surat / Ahmedabad',
    adAngle: 'Water-splash + knife scratch resistance test',
  },
];

const SUPPLIERS = [
  {
    name: 'Shree Balaji Apparels & Textiles',
    city: 'Surat, Gujarat',
    category: 'Ethnic & Western Wear, Co-ord Sets',
    moq: 'Zero MOQ (1 pc allowed)',
    cod: 'Yes (Via Shiprocket / NimbusPost)',
    verified: true,
  },
  {
    name: 'NexGen Gadgets & Import Hub',
    city: 'Karol Bagh, New Delhi',
    category: 'Smartwatches, TWS Earbuds, Phone Accessories',
    moq: 'No minimum order',
    cod: 'Full Support (Same-day dispatch)',
    verified: true,
  },
  {
    name: 'Royal Heritage Lifestyle & Decor',
    city: 'Jaipur, Rajasthan',
    category: 'Handicrafts, Bedding, Resin Art, Jewelry',
    moq: 'Dropship Friendly',
    cod: 'Direct courier integration',
    verified: true,
  },
  {
    name: 'Apex Kitchenware & Storage Solutions',
    city: 'Bhiwandi / Mumbai, Maharashtra',
    category: 'Kitchen gadgets, silicone storage, organizers',
    moq: '1 piece dropship',
    cod: 'Supported on all pin codes',
    verified: true,
  },
];

export const PhoneVideoDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'store' | 'suppliers' | 'ads'>('products');
  const [selectedProduct, setSelectedProduct] = useState<WinningProduct>(WINNING_PRODUCTS[0]);
  const [copiedSupplier, setCopiedSupplier] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSupplier(id);
    setTimeout(() => setCopiedSupplier(null), 2000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Section Heading */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          Inside The E-Com Bundle
        </div>
        <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white max-w-2xl leading-tight">
          Inspect What You Get For Just <span className="text-amber-400">₹99</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mt-2 mx-auto">
          Explore real winning products, high-converting store previews, verified zero-MOQ supplier contacts, and high-ROAS marketing ad scripts.
        </p>
      </div>

      {/* 4 Interactive Showcase Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {[
          { id: 'products', label: '1,000+ Winning Products', icon: TrendingUp },
          { id: 'store', label: 'Shopify Store Preview', icon: Store },
          { id: 'suppliers', label: 'Indian Supplier Directory', icon: Truck },
          { id: 'ads', label: 'High-ROAS Ad Creatives', icon: Megaphone },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/30 font-black'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="w-full max-w-4xl p-5 sm:p-7 rounded-3xl bg-[#0e101d] border border-cyan-500/30 shadow-2xl text-left">
        {/* TAB 1: 1,000+ WINNING PRODUCTS SPY */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Live Trending Dropshipping Products Database
                </span>
                <span className="text-xs text-slate-400">
                  Researched with Facebook Ad Library, TikTok Creative Center &amp; Indian market demand.
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-500/30 shrink-0">
                1,000+ Items In VIP Drive
              </span>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WINNING_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedProduct.id === prod.id
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        {prod.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{prod.name}</h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                      {prod.orders}
                    </span>
                  </div>

                  {/* Financial Breakdown (Sourcing vs Selling) */}
                  <div className="grid grid-cols-3 gap-2 my-3 p-2.5 rounded-xl bg-black/50 border border-slate-800/80 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Sourcing</span>
                      <span className="text-xs font-bold text-slate-200">₹{prod.sourcePrice}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Selling</span>
                      <span className="text-xs font-bold text-cyan-300">₹{prod.sellPrice}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold block">Net Margin</span>
                      <span className="text-xs font-black text-emerald-400">+₹{prod.profit}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Supplier: <strong className="text-slate-300">{prod.supplierLocation}</strong></span>
                    <span className="text-amber-400 font-semibold flex items-center gap-1">
                      <Percent className="w-3 h-3" /> {(prod.profit / prod.sourcePrice * 100).toFixed(0)}% ROI
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
              <span>All 1,000+ products include ready-to-run video ads, English/Hindi ad copy, and direct Indian supplier contact links.</span>
              <a
                href="https://rzp.io/rzp/nQllqCJ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shrink-0"
              >
                Get Full List ₹99
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: SHOPIFY STORE PREVIEW */}
        {activeTab === 'store' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Store className="w-5 h-5 text-cyan-400" />
                  15+ Plug &amp; Play High-Converting Shopify Store Themes
                </span>
                <span className="text-xs text-slate-400">
                  Pre-configured with sticky Buy Buttons, COD countdown timers, trust badges &amp; 0.8s load speed.
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30 shrink-0">
                Worth ₹15,000 Included
              </span>
            </div>

            {/* Mobile Store Mockup Container */}
            <div className="max-w-md mx-auto p-4 rounded-3xl bg-slate-950 border-2 border-slate-800 shadow-2xl">
              {/* Fake Browser Top */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> yourstore.com
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                  Free Shipping India
                </span>
              </div>

              {/* Product Showcase Inside Store */}
              <div className="py-4 space-y-3">
                <div className="h-44 rounded-2xl bg-gradient-to-tr from-slate-900 to-[#1e2338] border border-slate-800 flex items-center justify-center text-center p-4 relative overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-600 text-white font-black text-[10px] uppercase">
                    50% OFF TODAY
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] text-slate-400 bg-black/60 px-2 py-0.5 rounded">
                    ⚡ 18 Sold in Last Hour
                  </div>
                </div>

                <div>
                  <h5 className="font-extrabold text-white text-sm">
                    Luxury Glow Multi-Color Atmosphere Lamp
                  </h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-black text-amber-400">₹799</span>
                    <span className="text-xs text-slate-500 line-through">₹1,999</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-1.5 py-0.5 rounded">
                      SAVE ₹1,200
                    </span>
                  </div>
                </div>

                {/* Conversion Boosters */}
                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-black font-black text-sm uppercase tracking-wide shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                    <span>Cash on Delivery / Order Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 text-center">
                    <span className="p-1 rounded bg-slate-900 border border-slate-800">
                      ✓ Free 3-Day Express Shipping
                    </span>
                    <span className="p-1 rounded bg-slate-900 border border-slate-800">
                      ✓ 7-Day Easy Replacement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INDIAN SUPPLIER DIRECTORY */}
        {activeTab === 'suppliers' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-400" />
                  Direct Verified Indian Suppliers Network
                </span>
                <span className="text-xs text-slate-400">
                  Cut out expensive middlemen. Direct factory rates in Surat, Delhi, Mumbai, Tirupur, Jaipur.
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-500/30 shrink-0">
                100+ Manufacturers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SUPPLIERS.map((sup, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">{sup.name}</h4>
                      <span className="text-xs text-emerald-400 font-semibold">{sup.city}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" /> Verified
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    Category: <strong className="text-white">{sup.category}</strong>
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] p-2 rounded-xl bg-black/40 border border-slate-800/80">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Min Order:</span>
                      <span className="font-bold text-slate-200">{sup.moq}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">COD Support:</span>
                      <span className="font-bold text-emerald-400">{sup.cod}</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">WhatsApp &amp; Phone in VIP Drive</span>
                    <button
                      onClick={() => handleCopy(sup.name, `sup-${idx}`)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] flex items-center gap-1"
                    >
                      {copiedSupplier === `sup-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedSupplier === `sup-${idx}` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: HIGH-ROAS AD CREATIVES & BLUEPRINTS */}
        {activeTab === 'ads' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-purple-400" />
                  500+ Ready-To-Run Video Ad Templates &amp; Copy Vault
                </span>
                <span className="text-xs text-slate-400">
                  Stop burning money on bad ads. Copy-paste formulas for Facebook, Instagram, Google Ads &amp; WhatsApp Marketing.
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950 text-purple-400 text-xs font-bold border border-purple-500/30 shrink-0">
                500+ Assets
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-amber-400 font-bold text-xs uppercase block mb-1">Module 1</span>
                <h5 className="font-extrabold text-white text-sm">3-Second Hook Formulas</h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  50+ visual and audio hooks that stop Instagram &amp; Facebook scrolling immediately.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-cyan-400 font-bold text-xs uppercase block mb-1">Module 2</span>
                <h5 className="font-extrabold text-white text-sm">RTO &amp; Fake COD Defense</h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  WhatsApp automated OTP verification templates that reduce returns from 40% to under 12%.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 font-bold text-xs uppercase block mb-1">Module 3</span>
                <h5 className="font-extrabold text-white text-sm">Canva Banner Master Pack</h5>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  100+ fully editable banners, trust badges, logos, and Instagram story promo templates.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#171b33] to-[#121422] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-bold text-white text-sm">Ready to launch your e-commerce store today?</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Get full lifetime Google Drive access to all 4 modules for just ₹99.
                </p>
              </div>
              <a
                href="https://rzp.io/rzp/nQllqCJ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm uppercase tracking-wide shrink-0 shadow-lg hover:brightness-110 transition-all text-center"
              >
                Instant Access ₹99
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
