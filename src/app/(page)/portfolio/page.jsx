'use client';
import Link from 'next/link';

import { useState } from 'react';
import { X, Eye, Sun, Zap, Home, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SolarPanelGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const solarProjects = [
    {id: 1,
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    alt: 'Residential Rooftop Solar Installation',
    moreCount: 5,
    moreImages: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      'https://i.pinimg.com/1200x/3c/f4/82/3cf48235ab25a3fcd91d2c5a88d7b601.jpg',
    ],
    title: 'Residential Rooftop Solar',
    description: '5kW solar panel system installed on residential property',
    capacity: '5kW',
    location: 'New Delhi, India',
    icon: Home,
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/1200x/ea/42/7a/ea427a16cd68490ef9687dc8fd5487ce.jpg',
    alt: 'Commercial Solar Farm',
    moreCount: 8,
    moreImages: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://i.pinimg.com/736x/69/9e/67/699e674522a489a8a64d278167cdf6f6.jpg',
      'https://i.pinimg.com/736x/fd/de/6f/fdde6fbebd82f75da1288f75f587c810.jpg',
    ],
    title: 'Commercial Solar Farm',
    description: 'Large-scale 500kW commercial solar installation',
    capacity: '500kW',
    location: 'Rajasthan, India',
    icon: Building2,
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/736x/65/40/c5/6540c5448e4a94094b0c6418f2f875c0.jpg',
    alt: 'Industrial Solar Power Plant',
    moreCount: 10,
    moreImages: [
      'https://i.pinimg.com/1200x/6f/e6/bb/6fe6bb7ce23ad80956bab10b57eea863.jpg',
      'https://i.pinimg.com/736x/c6/b1/54/c6b15439833fa204b1183e46f096e5b2.jpg',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80',
      'https://images.unsplash.com/photo-1614960042260-7c6b0f8b6185?w=800&q=80',
    ],
    title: 'Industrial Solar Power',
    description: 'High-efficiency solar panels for industrial facility',
    capacity: '250kW',
    location: 'Maharashtra, India',
    icon: Zap,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
    alt: 'Urban Rooftop Installation',
    moreCount: 6,
    moreImages: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://i.pinimg.com/1200x/b4/47/48/b4474835d7682c22cd4dd9aa6ad34e86.jpg',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
    ],
    title: 'Urban Rooftop Solar',
    description: 'Modern solar installation on city building',
    capacity: '10kW',
    location: 'Bangalore, India',
    icon: Building2,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    alt: 'Solar Energy Field',
    moreCount: 12,
    moreImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    ],
    title: 'Solar Energy Field',
    description: 'Massive solar farm generating clean energy',
    capacity: '1MW',
    location: 'Gujarat, India',
    icon: Sun,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    alt: 'Residential Solar Setup',
    moreCount: 7,
    moreImages: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      'https://i.pinimg.com/1200x/97/65/93/976593476657ccf688cab98c04269dca.jpg',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
    ],
    title: 'Premium Residential Solar',
    description: 'High-performance solar system for home energy',
    capacity: '7.5kW',
    location: 'Pune, India',
    icon: Home,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    alt: 'Modern Solar Array',
    moreCount: 9,
    moreImages: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
    ],
    title: 'Modern Solar Array',
    description: 'State-of-the-art solar panel installation',
    capacity: '15kW',
    location: 'Hyderabad, India',
    icon: Zap,
  },
  {
    id: 8,
    src: 'https://i.pinimg.com/1200x/bc/fe/57/bcfe57841c4cc4973fc3e732756848a9.jpg',
    alt: 'Eco-Friendly Solar System',
    moreCount: 8,
    moreImages: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
    ],
    title: 'Eco-Friendly Solar System',
    description: 'Green energy solution for sustainable living',
    capacity: '8kW',
    location: 'Chennai, India',
    icon: Sun,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
    alt: 'Coastal Solar Installation',
    moreCount: 6,
    moreImages: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      'https://i.pinimg.com/1200x/e4/1d/ed/e41dedfd941bd62c3793b6b2713e796c.jpg',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
    ],
    title: 'Coastal Solar Installation',
    description: 'Solar panels designed for coastal environments',
    capacity: '12kW',
    location: 'Goa, India',
    icon: Home,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    alt: 'Desert Solar Power',
    moreCount: 11,
    moreImages: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://i.pinimg.com/736x/d4/33/73/d43373c7dde5db1d5eec3c0c859b4604.jpg',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
      'https://i.pinimg.com/1200x/cd/87/90/cd8790628b128b36e7cd8c223cdcfee1.jpg',
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    ],
    title: 'Desert Solar Power',
    description: 'Large-scale solar farm in arid region',
    capacity: '750kW',
    location: 'Rajasthan, India',
    icon: Sun,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
    alt: 'Smart Solar Grid',
    moreCount: 7,
    moreImages: [
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://i.pinimg.com/736x/3f/f2/e1/3ff2e17ab79e8234f59659f6c48c502d.jpg',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    ],
    title: 'Smart Solar Grid',
    description: 'Intelligent solar power distribution system',
    capacity: '300kW',
    location: 'Karnataka, India',
    icon: Zap,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
    alt: 'Agricultural Solar Project',
    moreCount: 8,
    moreImages: [
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://i.pinimg.com/1200x/35/ad/9c/35ad9c9f729c7681a5ae5dfef6034b77.jpg',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    ],
    title: 'Agricultural Solar Project',
    description: 'Solar panels supporting farm operations',
    capacity: '20kW',
    location: 'Punjab, India',
    icon: Sun,
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    alt: 'Municipal Solar Plant',
    moreCount: 9,
    moreImages: [
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://i.pinimg.com/1200x/f9/78/ad/f978ad357fcb78d18337c0c6bc5c6a9a.jpg',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    ],
    title: 'Municipal Solar Plant',
    description: 'City-wide renewable energy infrastructure',
    capacity: '600kW',
    location: 'Ahmedabad, India',
    icon: Building2,
  },
  {
    id: 14,
    src: 'https://i.pinimg.com/1200x/ac/c6/03/acc603579802d2c2e962095c89a1d246.jpg',
    alt: 'Next-Gen Solar Technology',
    moreCount: 10,
    moreImages: [
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80',
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      'https://i.pinimg.com/736x/3f/70/eb/3f70eb9d1f0acc5c1419bd0b659dfafc.jpg',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    ],
    title: 'Next-Gen Solar Technology',
    description: 'Advanced photovoltaic systems with maximum efficiency',
    capacity: '450kW',
    location: 'Telangana, India',
    icon: Zap,
  },

  ];

  const openImageModal = (p) => {
    setSelectedProject(p);
    setCurrentSlideIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentSlideIndex(0);
  };

  const getAllImages = (p) => (p ? [p.src, ...p.moreImages] : []);

  const goToNextSlide = () => {
    if (!selectedProject) return;
    const imgs = getAllImages(selectedProject);
    setCurrentSlideIndex((currentSlideIndex + 1) % imgs.length);
  };

  const goToPrevSlide = () => {
    if (!selectedProject) return;
    const imgs = getAllImages(selectedProject);
    setCurrentSlideIndex(currentSlideIndex === 0 ? imgs.length - 1 : currentSlideIndex - 1);
  };

  const goToSlide = (idx) => setCurrentSlideIndex(idx);

  const Icon = selectedProject?.icon;
  const allImages = selectedProject ? getAllImages(selectedProject) : [];
  const currentImage = allImages[currentSlideIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header with Background Image */}
      <div className="relative text-white py-16 sm:py-20 md:py-15 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/98/09/ee/9809eea100c0e73a0df58a3fb47dc4ac.jpg"
            alt="Solar panels background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Sun className="w-14 h-14 sm:w-16 sm:h-16 md:w-20    md:h-20 animate-pulse drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl">
            OUR <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> SOLAR PROJECTS</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto px-4 drop-shadow-2xl">
            Powering homes and businesses with clean, renewable energy
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-30 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {solarProjects.map((p) => {
            const PIcon = p.icon;
            return (
              <div
                key={p.id}
                className="group relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                onClick={() => openImageModal(p)}
              >
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />

                {/* Always Visible Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                  {/* Hover Eye Icon - No Blur */}
                  <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/30 p-4 rounded-full">
                      <Eye className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <PIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 truncate">
                        {p.title}
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm mb-3 line-clamp-2">{p.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                          {p.capacity}
                        </span>
                        <span className="bg-blue-500/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                          {p.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Right Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl backdrop-blur-sm">
                  <span className="text-xs sm:text-sm font-bold">+{p.moreCount} more</span>
                </div>

                {/* Top Left Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{p.capacity}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600  to-orange-500 text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 truncate">{selectedProject.description}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0 ml-2"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row h-[calc(95vh-80px)] sm:h-[calc(95vh-88px)]">
              {/* Main Image Section */}
              <div className="flex-1 bg-gray-50 relative flex items-center justify-center p-4 sm:p-6">
                <div className="relative w-full h-full max-w-4xl max-h-full flex items-center justify-center">
                  <img
                    src={currentImage}
                    alt={selectedProject.alt}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={goToNextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-xl transition-all hover:scale-110"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl">
                    {currentSlideIndex + 1} / {allImages.length}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-80 xl:w-96 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col max-h-[45vh] lg:max-h-full">
                {/* Project Details */}
                <div className="p-4 sm:p-5 border-b border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Project Details</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 bg-green-50 p-3 rounded-xl">
                      <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">Capacity</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                          {selectedProject.capacity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-blue-50 p-3 rounded-xl">
                      <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">Location</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                          {selectedProject.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4">
                    All Images ({allImages.length})
                  </h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {allImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          currentSlideIndex === i
                            ? 'ring-3 ring-yellow-500 shadow-xl scale-105'
                            : 'ring-1 ring-gray-200 hover:ring-yellow-300 hover:shadow-lg'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`View ${i + 1}`}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            currentSlideIndex === i ? 'scale-110' : 'scale-100 hover:scale-110'
                          }`}
                        />
                        {currentSlideIndex === i && (
                          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 via-transparent to-transparent flex items-end justify-center p-1 sm:p-2">
                            <div className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-lg">
                              ✓
                            </div>
                          </div>
                        )}
                        <div className="absolute top-1 right-1 bg-black/70 text-white px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium">
                          {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Background Image */}
      <div className="relative text-white py-16 sm:py-20 md:py-15 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80"
            alt="Solar farm background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-2xl">
            Ready to Go Solar?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-white drop-shadow-2xl">
            Join thousands of satisfied customers who have switched to clean energy
          </p>
          <Link href="/contact">
          <button className="bg-white text-blue-600 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            Get Free Quote
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}