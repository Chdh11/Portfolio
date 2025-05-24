import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import './Blogs.css';

export default function Blogs() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y1 = useTransform(scrollYProgress, [0, 0.5], [50, 0]); 
    const y2 = useTransform(scrollYProgress, [0, 0.5], [50, 0]); 

    const y3 = useTransform(scrollYProgress, [0, 0.5], [50, 0]); 


    const text1 = `Welcome to my website!\nHere you can find amazing content.\nEnjoy your stay!`;
    const lines1 = text1.split('\n');
    const text2 = `Here is some blog content.\nWe share insights and stories.\nStay tuned for more updates!`;
    const lines2 = text2.split('\n');
    const text3 = `Read our latest articles.\nGain knowledge and tips.\nJoin our community!`;
    const lines3 = text3.split('\n');

    return (
        <div id="blogs"style={{backgroundColor:"black", color:"white",paddingBottom:"50px"}}>
            <div style={{
                fontSize: "90px",
                fontWeight: "bold",
                marginBottom: "50px",
                textAlign: "right",
                marginRight: "120px",
                fontFamily:"Oxanium",
                // color:"#ed6f63"
            }}>
                Blogs
            </div>
            <div ref={sectionRef} className='flex-container'>
                {isInView && (
                    <motion.div style={{ opacity, y:y1 }} className='blog1'>
                        {lines1.map((line, index) => (
                            <motion.div 
                                key={index} 
                                transition={{ delay: index * 0.5 }} 
                            >
                                {line}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
                
                {isInView && (
                    <motion.div style={{ opacity, y:y2 }} className='blog2'>
                        {lines2.map((line, index) => (
                            <motion.div 
                                key={index} 
                                transition={{ delay: index * 0.5 }} 
                            >
                                {line}
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {isInView && (
                    <motion.div style={{ opacity, y:y3 }} className='blog3'>
                        {lines3.map((line, index) => (
                            <motion.div 
                                key={index} 
                                transition={{ delay: index * 0.5 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
            <div
                style={{
                    marginTop: "70px",
                    textAlign: "right",
                    marginRight: "100px",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginBottom: "30px"
                }}
            >
                ---Explore More
            </div>
        </div>
    );
}
