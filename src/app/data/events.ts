import raceAgainstSuicide from "../../assets/race-against-suicide.png";
import openingMass from "../../assets/opening-mass.png";
import leadershipSeminar from "../../assets/leadership-seminar.png";
import cics1 from "../../assets/cics-1.png";
import cics2 from "../../assets/cics-2.png";
import cics3 from "../../assets/cics-3.png";

export interface EventItem {
  id: number;
  title: string;
  date: string;
  sortDate: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Race Against Suicide",
    date: "October 21, 2026",
    sortDate: "2026-10-21",
    time: "8:00 AM - 12:00 PM",
    location: "UST Parade Grounds",
    category: "Community",
    image: raceAgainstSuicide,
    description: "Join the CICS community as we take strides for mental wellness and stand together against suicide.",
  },
  {
    id: 2,
    title: "Opening Mass & Oath-Taking Ceremony",
    date: "August 10, 2026",
    sortDate: "2026-08-10",
    time: "2:00 PM - 4:00 PM",
    location: "CICS AVR",
    category: "Academic",
    image: openingMass,
    description: "The Opening Mass & Oath-Taking Ceremony marks the official start of the academic year and the formal induction of newly elected officers.",
  },
  {
    id: 3,
    title: "Leadership Seminar",
    date: "September 12, 2026",
    sortDate: "2026-09-12",
    time: "9:00 AM - 5:00 PM",
    location: "CICS Function Hall",
    category: "Career",
    image: leadershipSeminar,
    description: "The Leadership Seminar aims to inspire and equip student leaders with the knowledge, skills, and values essential for effective leadership.",
  },
  {
    id: 4,
    title: "CICS Week Celebration",
    date: "November 3-7, 2026",
    sortDate: "2026-11-03",
    time: "All Day",
    location: "Various Venues",
    category: "Celebration",
    image: cics1,
    description: "A week-long celebration of CICS excellence featuring competitions, exhibitions, and social activities.",
  },
  {
    id: 5,
    title: "CICS Sports Fest 2026",
    date: "May 10, 2026",
    sortDate: "2026-05-10",
    time: "1:00 PM - 6:00 PM",
    location: "UST Quadricentennial Pavilion",
    category: "Sports",
    image: cics3,
    description: "Compete in an exciting inter-college sports fest featuring basketball, volleyball, and badminton tournaments.",
  },
  {
    id: 6,
    title: "Career Fair 2026",
    date: "December 5, 2026",
    sortDate: "2026-12-05",
    time: "10:00 AM - 4:00 PM",
    location: "UST Quadricentennial Pavilion",
    category: "Career",
    image: cics1,
    description: "Meet with top tech companies and explore internship and job opportunities.",
  },
  {
    id: 7,
    title: "Data Science Bootcamp",
    date: "December 12, 2026",
    sortDate: "2026-12-12",
    time: "9:00 AM - 3:00 PM",
    location: "CICS Laboratory 5",
    category: "Academic",
    image: cics2,
    description: "A hands-on bootcamp covering data cleaning, visualization, and model fundamentals for beginners.",
  },
  {
    id: 8,
    title: "Alumni Tech Talks",
    date: "December 18, 2026",
    sortDate: "2026-12-18",
    time: "1:00 PM - 4:00 PM",
    location: "Frassati Auditorium",
    category: "Career",
    image: cics1,
    description: "Learn from CICS alumni working in software engineering, product, security, and cloud roles.",
  },
  {
    id: 9,
    title: "Year-End Community Program",
    date: "December 22, 2026",
    sortDate: "2026-12-22",
    time: "8:30 AM - 12:00 PM",
    location: "UST Plaza Mayor",
    category: "Community",
    image: cics3,
    description: "Join the council's outreach and donation drive as we cap off the semester with a community initiative.",
  },
];