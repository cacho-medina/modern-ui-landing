"use client";

import { HeroParallaxDemo } from "@/components/hero-demo";
import { SparklesPreview } from "@/components/hero-sparkles";
import { GoogleGeminiEffectDemo } from "@/components/google-gemini";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#020617]">
            <section className="w-full">
                <HeroParallaxDemo />
            </section>
            <section className="h-screen grid place-items-center">
                <div data-aos="fade-left" className="max-w-3xl">
                    <p className="text-xl xl:text-5xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A quisquam vitae incidunt aperiam quaerat ipsam
                        provident deserunt omnis unde atque velit, at modi optio
                        veniam, accusantium beatae aut, ipsum consequatur
                        mollitia suscipit ab illo iste voluptas. Repellendus
                        nostrum molestias fuga.
                    </p>
                </div>
            </section>
            <section className="px-4">
                <div className="flex flex-col items-center sm:px-2 md:py-32 gap-8 text-blanco">
                    <div className="xl:w-[1200px] pb-10 lg:pb-24 flex items-center justify-center flex-wrap gap-8 info-container">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>logo</span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Servicios
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt aliquam debitis at ad
                                ipsa minima in doloremque? Maiores, aliquam
                                magni.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>logo</span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Servicios
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt aliquam debitis at ad
                                ipsa minima in doloremque? Maiores, aliquam
                                magni.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>logo</span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Servicios
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt aliquam debitis at ad
                                ipsa minima in doloremque? Maiores, aliquam
                                magni.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen grid place-items-center">
                <SparklesPreview />
            </section>
            <section className="w-full grid place-items-center">
                <GoogleGeminiEffectDemo />
            </section>
        </main>
    );
}
