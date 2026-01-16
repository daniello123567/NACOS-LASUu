interface JobListing {
  id: string;
  image: string;
  title: string;
  postedDate: string;
  company: string;
  location: string;
  salary: string;
  applicationDeadline: string;
  description: string;
  jobType: 'Internships' | 'Academics' | 'Research'; 
}


const allJobListings: JobListing[] = [
  {
    id: "intern_001",
    image: "https://cdn.dribbble.com/userupload/7999237/file/original-c36dc7acb3a3031d5c48a924752bf36a.jpg?resize=400x0",
    title: "Software Engineering Intern",
    postedDate: "1 week ago",
    company: "TechNova Inc",
    location: "Lagos, Nigeria",
    salary: "₦150,000 - ₦200,000 a month",
    applicationDeadline: "June 30th",
    description: "A 6-month internship program for final year students interested in software development.",
    jobType: "Internships"
  },
  {
    id: "intern_002",
    image: "https://cdn.dribbble.com/userupload/45223882/file/3d7575be99b17a2493477819ef5770f3.jpg?resize=400x0",
    title: "Marketing Intern",
    postedDate: "2 days ago",
    company: "GrowthStartups NG",
    location: "Remote",
    salary: "₦120,000 - ₦180,000 a month",
    applicationDeadline: "July 10th",
    description: "Assist with digital marketing campaigns and social media management.",
    jobType: "Internships"
  },

  // ===== ACADEMICS (2 objects) =====
  {
    id: "academic_001",
    image: "https://cdn.dribbble.com/userupload/44905357/file/3ee5e2fee7b7b82774d7e105b01a8bc3.jpg?resize=400x0",
    title: "Lecturer - Computer Science",
    postedDate: "2 weeks ago",
    company: "Federal University of Technology",
    location: "Akure, Nigeria",
    salary: "₦350,000 - ₦450,000 a month",
    applicationDeadline: "June 25th",
    description: "Teach undergraduate courses in computer science and supervise student projects.",
    jobType: "Academics"
  },
  {
    id: "academic_002",
    image: "https://cdn.dribbble.com/userupload/13127923/file/original-5731d10ee72653e1a4a5590591250046.jpg?resize=400x0",
    title: "Assistant Professor - Economics",
    postedDate: "3 days ago",
    company: "University of Lagos",
    location: "Lagos, Nigeria",
    salary: "₦400,000 - ₦500,000 a month",
    applicationDeadline: "July 15th",
    description: "Conduct lectures, research, and mentor students in economics department.",
    jobType: "Academics"
  },

  // ===== RESEARCH (2 objects) =====
  {
    id: "research_001",
    image: "https://cdn.dribbble.com/userupload/16797763/file/original-36647fbb373783791f9d3c8cf81951bc.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center",
    title: "Clinical Research Coordinator",
    postedDate: "1 month ago",
    company: "Nigerian Institute of Medical Research",
    location: "Lagos, Nigeria",
    salary: "₦500,000 - ₦650,000 a month",
    applicationDeadline: "July 30th",
    description: "Coordinate clinical trials and research studies in tropical diseases.",
    jobType: "Research"
  },
  {
    id: "research_002",
    image: "https://cdn.dribbble.com/userupload/30111999/file/original-2e1e598fe522a096f5f5c4560c1ab549.png?format=webp&resize=400x300&vertical=center",
    title: "AI Ethics Researcher",
    postedDate: "5 days ago",
    company: "African AI Research Center",
    location: "Abuja, Nigeria",
    salary: "₦450,000 - ₦550,000 a month",
    applicationDeadline: "August 1st",
    description: "Research ethical implications of artificial intelligence in African contexts.",
    jobType: "Research"
  }
];
export type {JobListing}
export default allJobListings
