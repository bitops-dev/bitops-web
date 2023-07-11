import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  public backgroundImageUrl = "../../../assets/img/day_night/1.jpg"
  public services = []
  constructor() { }

  ngOnInit(): void {
    this.services = [
      {
        name: "Web Development And Maintenance",
        description: " We provide comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence." ,
        img: "../../../assets/img/Services/web_development.jpg"
      },
      {
        name: " Application And Game Development",
        description: " Our company redefines app and game development with our innovative and cutting-edge solutions. Our team of skilled developers and designers leverages the latest technologies to create unique and captivating applications and games. We specialize in crafting immersive experiences that push the boundaries of creativity and interactivity. From concept ideation to development, testing, and deployment, we deliver customized solutions that engage users and leave a lasting impact in the digital realm." ,
        img: "../../../assets/img/Services/App_and_Game_Development.jpeg"
      },
      {
        name: " UI and UX Design",
        description: " We are specialized in crafting exceptional UI and UX designs that elevate user experiences to new heights. With a deep understanding of user psychology and behavior, we create intuitive and visually stunning interfaces that captivate and engage your target audience. Through meticulous user research, wireframing, prototyping, and usability testing, we ensure seamless navigation, effortless interactions, and a memorable user journey. Our designs not only enhance satisfaction but also drive conversions and establish a strong brand identity for your business. " ,
        img: "../../../assets/img/Services/UI_and_UX_Design.jpeg"
      },
      {
        name: "Cloud Services",
        description: " We leverage leading cloud service providers like AWS, Azure, and GCP to offer comprehensive solutions. From cloud infrastructure setup and migration to scalable storage, compute resources, and advanced analytics, we deliver tailored cloud services that optimize performance, enhance security, and enable cost-effective scalability for your business operations." ,
        img: "../../../assets/img/Services/Cloud_Services.jpeg"
      },
      {
        name: " Automation Testing",
        description: " We provide top-notch automation testing services to streamline and optimize your software testing processes. With expertise in industry-leading tools and frameworks, we automate repetitive and time-consuming tests, ensuring faster releases and improved quality. Our comprehensive approach covers test script development, execution, and result analysis, enabling efficient and reliable software delivery." ,
        img: "../../../assets/img/Services/Automation_Testing.jpeg"
      },
      {
        name: " IOT And AI/ML",
        description: " We offer advanced IOT and AI/ML services to drive innovation and efficiency in your business. We specialize in developing IOT solutions that connect devices, collect data, and enable intelligent decision-making. Leveraging AI and ML technologies, we provide intelligent automation, predictive analytics, and personalized experiences, unlocking the full potential of your data and accelerating your digital transformation journey." ,
        img: "../../../assets/img/Services/IOT_and_AI_ML.jpg"
      },
      {
        name: " Data Analytics",
        description: " We provide comprehensive data analytics and dashboard building services to help businesses gain valuable insights and make informed decisions. We leverage advanced analytics tools and techniques to collect, analyze, and visualize data, creating interactive dashboards that offer actionable insights and facilitate data-driven decision-making, empowering your organization to thrive in a data-centric world. " ,
        img: "../../../assets/img/Services/Data_Analytics.jpeg"
      },
      {
        name: " SQL Scripting",
        description: " We offer expert SQL scripting services to assist businesses in efficiently managing and manipulating their databases. With our deep understanding of SQL, we provide customized solutions for database design, query optimization, data extraction, transformation, and loading (ETL), ensuring optimal performance and seamless data integration, enabling you to unlock the full potential of your data. " ,
        img: "../../../assets/img/Services/SQL_Scripting.jpg"
      },
      {
        name: " Project Guidance",
        description: " We provide comprehensive project guidance services to support businesses in successfully executing their projects. With our experienced team, we offer expert advice, best practices, and practical solutions throughout the project lifecycle. From project planning and scoping to risk management and quality assurance, we ensure smooth project delivery, helping you achieve your goals effectively and efficiently." ,
        img: "../../../assets/img/Services/Project_Guidance.jpeg"
      },
      {
        name: " Enterprise Training",
        description: " We are specialized in delivering top notch enterprise training programs on AWS, Azure, AI, ML, MySQL, Python, Core Java, Data Structures, and IOT. Our expert trainers provide hands-on, practical training to equip your team with the skills and knowledge needed to harness these technologies effectively, empowering your organization for success in the digital era." ,
        img: "../../../assets/img/Services/Enterprise_Training.jpeg"
      }
    ]
  }

}
