import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        isBtnShow: false,
        url: '',
        title: "ACQ Mobile Apps",
        img: "Cover-ACQ.png",
        desc: `A startup application designed to simplify the process for customers to book AC technicians for installation, repair,
                maintenance, and cleaning services. This app features an easy and quick booking system for customers, while allowing AC
                technicians to efficiently manage their tasks. With a focus on user-friendly design and organized management, this
                application provides a complete solution for AC service needs.
            `,
            
    },
    {
        id: 2,
        isBtnShow: false,
        url: '',
        title: "IPSMART",
        img: "Cover-IPSMART.png",
        desc: `
            This application was developed for academic research purposes and as part of my final project. It enables waste
            management personnel to monitor the capacity of waste bins in real-time, complete with notifications when the bins are
            full. Additionally, the application provides a navigation feature to assist personnel in reaching the locations of the waste
            bins. It is integrated with IoT devices that serve as input data directly from the field.
        `,
    },
    {
        id: 3,
        isBtnShow: false,
        url: '',
        title: "Mereset Kakdara",
        img: "Cover-Mereset-Kakdara.png",
        desc: `
            This application is designed to help alleviate stress for breast cancer patients. It features a music player that plays spiritual
            or meditation music. Additionally, the app includes an article section that provides motivational content aimed at
            encouraging breast cancer patients.
        `,
    },
    {
        id: 4,
        isBtnShow: false,
        url: '',
        title: "Sistem Presensi Terpusat (SIPESAT) Polindra",
        img: "Cover-SIPESAT.png",
        desc: "The SIPESAT application was developed to log attendance for college students and manage the schedule for each class.",
    },
    {
        id: 5,
        isBtnShow: true,
        url: 'https://desamerdeka.org/',
        title: "Desa Merdeka",
        img: "desa-merdeka.png",
        desc: `Desa Merdeka is an application designed to empower communities, micro, small, and medium enterprises (UMKM), and
            villages in Indonesia. This platform aims to maximize the potential within each village by providing resources, support, and
            networking opportunities. Desa Merdeka fosters collaboration among local stakeholders to enhance economic growth and
            community development, ultimately contributing to the overall prosperity of rural areas.
            `,
    },
    {
        id: 6,
        isBtnShow: true,
        url: 'https://acq-teknologi-indonesia.com/',
        title: "ACQ Web App",
        img: "ACQ.png",
        desc: `The ACQ application is a platform developed by our startup for booking AC technicians. It streamlines the booking process
                for a range of services, including repairs, maintenance, and AC cleaning.
            `,
    },
    {
        id: 7,
        isBtnShow: true,
        url: 'https://virtualtechnopark.kemenperin.go.id/',
        title: "Virtual Technopark",
        img: "VT.png",
        desc: ` Virtual Technopark is an application supported by the Ministry of Industry (KEMENPERIN) that provides a platform for
                startups, associations, and communities in Indonesia to operate directly under the auspices of the Ministry of Industry.
            `,
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.isBtnShow ? <a target="blank" href={item.url}>Visit</a> : <div></div>}
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
