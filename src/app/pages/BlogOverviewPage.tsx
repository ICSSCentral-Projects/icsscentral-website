import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getArticleById } from '../../lib/strapiApi';
import { Calendar, User, ArrowLeft, ArrowUp } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import leadershipSeminar from "../../assets/leadership-seminar.png";
import openingMass from "../../assets/opening-mass.png";
import raceAgainstSuicide from "../../assets/race-against-suicide.png";
import cics1 from "../../assets/cics-1.png";
import cics2 from "../../assets/cics-2.png";
import cics3 from "../../assets/cics-3.png";
import imgIcssc41 from "figma:asset/812f001f003ddb7acc93883157c7b7496281a9aa.png";
import imgIcsSc1 from "figma:asset/33915aeaef238599afc783beafd6fdf7b4874a54.png";
import imgImageBox from "figma:asset/40726e97b840b602c2e53237df0a633d96ca15ae.png";
import imgImageBox1 from "figma:asset/0911d4d07b69ce06d239bbd36ce5308dbab62416.png";

const F = "'Poppins', sans-serif";

interface BlogContent {
  title: string;
  author: string;
  date: string;
  image: string;
  body: React.ReactNode;
}

const blogContent: Record<string, BlogContent> = {
  "1": {
    title: "CICS Student Council launches mental health awareness campaign",
    author: "Maria Santos",
    date: "March 5, 2026",
    image: raceAgainstSuicide,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          In response to growing concerns about student mental health, the CICS Student Council has launched a comprehensive awareness campaign to support student wellbeing and mental health across the campus community. The initiative, titled "Mindful Thomasians," aims to destigmatize conversations around mental health and provide accessible resources to every CICS student.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          The "Mindful Thomasians" initiative
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Recognizing the pressures that come with rigorous computing curricula — from back-to-back coding deadlines to thesis defense preparations — the ICSSC partnered with the university's Office of Counseling and Career Services to design a multi-pronged campaign. The program includes peer counseling sessions, wellness workshops, and a dedicated online portal where students can anonymously seek support.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Race Against Suicide fun run
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          The flagship event of the campaign was the "Race Against Suicide" fun run, which brought together over 500 students, faculty, and staff for a morning of solidarity. Participants ran across the historic UST campus, with proceeds going to mental health organizations. The event also featured resource booths, on-site counseling check-ins, and interactive workshops designed to equip students with coping strategies for academic stress.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Ongoing support and resources
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Beyond one-time events, the council has established a permanent mental health resource corner in the CICS building, stocked with self-help materials and staffed by trained peer counselors during office hours. A dedicated social media series, "Mental Health Mondays," also shares weekly tips and stories from students who have navigated mental health challenges during their college journey.
        </p>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The ICSSC encourages all students to take advantage of these resources and reminds everyone that seeking help is a sign of strength, not weakness. The council plans to expand the program in the coming semesters, including partnerships with external mental health professionals and the introduction of mindfulness sessions before major exam periods.
        </p>
      </>
    ),
  },
  "2": {
    title: "New leadership training program announced for student leaders",
    author: "John Reyes",
    date: "March 3, 2026",
    image: leadershipSeminar,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          The CICS Student Council announces a new comprehensive training program designed to develop leadership skills among CICS students and prepare them for future roles. The "Leaders of Tomorrow" program is a semester-long initiative that equips student organization officers with essential skills in project management, public speaking, conflict resolution, and team building.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Program structure and modules
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          The program consists of six intensive modules delivered over the course of one semester. Each module combines theoretical frameworks with hands-on exercises, case studies from successful student organizations, and mentorship sessions with alumni who have gone on to leadership positions in the tech industry. Topics include strategic planning, stakeholder management, financial literacy for organizations, and effective communication.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Mentorship and peer support
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Complementing the leadership program is a new peer mentorship initiative that pairs upperclassmen with freshmen and transferees. This one-on-one mentorship model has proven effective in helping new students navigate the challenges of college life, from choosing the right electives to finding their niche within the CICS community.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Who can apply?
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The program is open to all CICS students who currently hold or aspire to hold leadership positions in recognized student organizations. Applications open in April 2026, with the first cohort beginning in June. Early feedback from pilot participants has been overwhelmingly positive, with attendees highlighting the practical applicability of the skills taught and the value of cross-organization networking.
        </p>
      </>
    ),
  },
  "3": {
    title: "CICS Week 2025: A week of excellence and innovation",
    author: "Sarah Lim",
    date: "February 28, 2026",
    image: openingMass,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          Looking back at the spectacular CICS Week celebration that brought together students, faculty, and industry partners for a week of learning and collaboration. CICS Week 2025 was the largest edition yet, with over 2,000 participants across five days of activities ranging from academic competitions to cultural performances and industry networking events.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Highlights of the week
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          The week kicked off with the annual CICS Olympics, where students from all programs competed in a mix of academic and recreational challenges. Day two featured the much-anticipated Hackathon Challenge, where 40 teams raced to build solutions for real-world problems posed by industry partners. The winning team developed an AI-powered scheduling assistant for campus facilities that is now being considered for actual implementation.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Industry night and career fair
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          One of the most anticipated events was Industry Night, where representatives from top technology companies including Accenture, Globe Telecom, and several prominent startups shared insights on emerging career paths. Students had the opportunity to participate in mock interviews, portfolio reviews, and one-on-one mentoring sessions with industry professionals.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Cultural showcase
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The week concluded with a vibrant Cultural Showcase, proving that CICS students are not only tech-savvy but also artistically talented. Musical performances, dance numbers, and a fashion show celebrating Filipino heritage drew a packed audience. The ICSSC has already begun planning CICS Week 2026, promising an even bigger and more impactful celebration.
        </p>
      </>
    ),
  },
  "4": {
    title: "Student council achieves record participation in community service",
    author: "Carlos Mendoza",
    date: "February 25, 2026",
    image: imgIcsSc1,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          This semester saw unprecedented student engagement in community service programs organized by the Student Council, making a real difference in local communities. Over 800 CICS students volunteered across 12 different outreach programs, contributing a combined total of more than 4,000 hours of community service — a new record for the college.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Tech for Good initiative
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          One standout project was the "Tech for Good" initiative, where CICS students volunteered their technical skills to build websites, digital tools, and social media strategies for local non-profit organizations. Teams of 4-5 students worked directly with NGO stakeholders over a period of eight weeks, delivering production-ready solutions that these organizations continue to use today.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Digital literacy workshops
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Another impactful program was the series of digital literacy workshops conducted in underserved communities around Manila. CICS students taught basic computer skills, internet safety, and productivity tools to senior citizens and out-of-school youth, helping bridge the digital divide in meaningful ways.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Environmental clean-up drives
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The council also organized monthly environmental clean-up drives in partnership with local government units. These events not only contributed to cleaner communities but also fostered a sense of environmental responsibility among students. The ICSSC plans to continue expanding its community service portfolio, with new partnerships and programs already in the pipeline for next semester.
        </p>
      </>
    ),
  },
  "5": {
    title: "Technology summit 2025: Bridging academia and industry",
    author: "Anna Cruz",
    date: "February 20, 2026",
    image: imgImageBox,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          The annual Technology Summit brought together students and industry leaders to discuss the future of technology education and career opportunities. This year's edition was the largest in CICS history, drawing over 1,200 attendees from various departments across the university and featuring keynote sessions from some of the Philippines' most respected tech professionals.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Keynote sessions and panel discussions
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Industry leaders from companies including Accenture, Globe Telecom, and several prominent local startups presented keynote sessions on topics ranging from artificial intelligence and cybersecurity to the future of cloud computing. A highlight was the panel discussion on "The Future of Filipino Tech Talent," which explored how Philippine universities can better prepare graduates for the global tech workforce.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Hands-on workshops
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Beyond talks, the summit featured a series of hands-on workshops where students could learn new skills in areas like machine learning, blockchain development, and UX design. These sessions were led by practicing professionals and gave students a taste of what working with cutting-edge technologies looks like in a professional setting.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Internship and career opportunities
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          Students who attended reported feeling more confident about their career prospects, with many securing internship opportunities on the spot. The networking sessions proved particularly valuable, with several companies expressing interest in establishing long-term recruitment pipelines with CICS. The council plans to make next year's summit even larger, potentially opening it up to other universities in the Manila area.
        </p>
      </>
    ),
  },
  "6": {
    title: "Student council introduces new online services portal",
    author: "Mark Tan",
    date: "February 15, 2026",
    image: cics1,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          Making student services more accessible, the CICS Student Council launches a new digital platform for student requests and inquiries, streamlining campus processes. The new Online Services Portal consolidates all student council services into a single, easy-to-navigate web application that students can access from any device.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          What the portal offers
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          The portal allows students to submit Freedom of Information requests, file grievances through the STRAW Desk, access the student directory, and register for upcoming events — all in one place. Each request is tracked with a unique reference number, and students receive real-time status updates via email notifications. The system also features an FAQ section and a chatbot assistant for quick answers to common questions.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Built by students, for students
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          What makes this portal special is that it was entirely designed and developed by CICS students under the guidance of faculty advisors. The development team used modern web technologies including React, TypeScript, and a cloud-based backend, giving the student developers valuable real-world project experience while creating a tool that directly benefits their peers.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Future enhancements
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The council has a roadmap of planned improvements, including integration with the university's student information system, a mobile app version, and advanced analytics dashboards for council officers to better understand student needs. The portal represents a significant step toward a more digitally connected and responsive student government.
        </p>
      </>
    ),
  },
  "9": {
    title: "ICSSC launches peer mentoring circles for freshmen",
    author: "Alyssa De Leon",
    date: "February 8, 2026",
    image: cics2,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          To make first-year adjustment smoother, the ICSSC launched Peer Mentoring Circles that connect freshmen with trained upperclass volunteers from Computer Science, Information Technology, and Information Systems. Each circle meets bi-weekly and focuses on academics, campus navigation, and personal wellbeing.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          How the circles work
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Students are grouped by shared interests and class schedules so meetings remain consistent and practical. Sessions cover study planning, finding campus resources, and preparing for major requirements such as programming projects and practical exams. Mentors also share techniques that worked for them, including time-blocking, collaborative note-taking, and effective consultation habits.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Early impact
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          Feedback from the first month has been positive, with freshmen reporting higher confidence in handling coursework and participating in class. The council is preparing additional mentor training to scale the initiative across more blocks next term.
        </p>
      </>
    ),
  },
  "10": {
    title: "CICS innovation challenge opens for capstone-ready ideas",
    author: "Rafael Ong",
    date: "February 2, 2026",
    image: cics3,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          The CICS Innovation Challenge is now open for teams aiming to transform class concepts into deployable solutions. The program invites capstone-ready proposals that address practical needs in education, operations, and community services.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Eligibility and format
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Teams of three to five students can submit concept notes, architecture drafts, and expected user outcomes. Proposals are reviewed by a mixed panel of faculty and alumni. Selected groups receive mentoring sessions for product strategy, technical feasibility, and user testing.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          What teams can gain
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          Finalists will showcase their work in a public demo day and receive support for pilot deployments inside the college. The challenge is designed to help students bridge coursework with real-world application and strengthen their project portfolios before graduation.
        </p>
      </>
    ),
  },
  "11": {
    title: "Council hosts inclusive design workshop for student developers",
    author: "Patricia Go",
    date: "January 28, 2026",
    image: openingMass,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          The ICSSC held an Inclusive Design Workshop to promote accessibility-first thinking among student developers. Participants learned how design choices affect users with different abilities and practiced building interfaces that are easier to navigate and understand.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Core topics covered
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Sessions included semantic structure, color contrast checks, keyboard accessibility, and readable content patterns. Students also ran mini usability tests using accessibility simulators to identify layout, content, and interaction issues early in the design process.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Next steps
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The council plans to integrate accessibility checkpoints into future student project showcases, encouraging teams to treat inclusive design as a core quality standard rather than a late-stage add-on.
        </p>
      </>
    ),
  },
  "12": {
    title: "Community coding outreach reaches 5 partner schools",
    author: "Nico Villanueva",
    date: "January 20, 2026",
    image: leadershipSeminar,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          ICSSC volunteers completed a multi-school coding outreach tour focused on foundational programming and digital literacy. The initiative reached five partner schools and introduced over 400 learners to basic computational thinking.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Training approach
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Volunteers delivered short, activity-based lessons on logic, variables, and simple problem solving. Modules were adapted for each school context and included collaborative challenges to maintain engagement for mixed learner levels.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Continuing the program
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          Follow-up sessions and mentorship support are being scheduled for the next term. The council is also preparing open learning kits so partner teachers can continue classroom activities independently.
        </p>
      </>
    ),
  },
  "13": {
    title: "Registration now open for CICS research colloquium",
    author: "UST ICSSC",
    date: "January 15, 2026",
    image: raceAgainstSuicide,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          Registration is now open for this semester's CICS Research Colloquium. Students are encouraged to submit abstracts, posters, and prototype demonstrations across key tracks including artificial intelligence, cybersecurity, software engineering, and data systems.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Submission tracks
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          The colloquium accepts early-stage ideas, in-progress studies, and completed research outputs. Teams can join as oral presenters or poster exhibitors, depending on project maturity and format. Faculty mentors are available to provide review guidance before final submission.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Why join
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          Participating in the colloquium helps students sharpen research communication, gather expert feedback, and build strong credentials for scholarships, internships, and future graduate studies.
        </p>
      </>
    ),
  },
  "14": {
    title: "Student org media team unveils new content production pipeline",
    author: "Denise Co",
    date: "January 10, 2026",
    image: cics2,
    body: (
      <>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
          The student organization media team introduced a new end-to-end production workflow to improve event coverage turnaround and visual consistency. The updated pipeline standardizes planning, shooting, editing, approval, and publishing stages.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Workflow improvements
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Teams now use shared shot lists, template-based graphics, and clear review checkpoints to reduce delays. This allows the group to release same-day event highlights while preserving quality standards for long-form recap content.
        </p>
        <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
          Better collaboration across units
        </h2>
        <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
          The media team now works more closely with program heads and logistics officers during pre-production. This tighter coordination improves story coverage and ensures updates remain timely across all official council channels.
        </p>
      </>
    ),
  },
};

export default function BlogOverviewPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }
    getArticleById(id).then((data) => {
      if (data) {
        setBlog({
          title: data.post_title,
          author: data.post_author,
          date: new Date(data.postDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          image: data.coverImage?.url ?? '',
          body: <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6' }}>{data.post_content}</p>,
        });
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading…</div>;

  if (!blog) {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
        <InnerHeroBanner title="News & Updates" breadcrumb="Latest / News & Updates" />
        <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '28px', marginBottom: '16px' }}>Article not found</h2>
          <p className="text-[#555]" style={{ fontSize: '16px', marginBottom: '24px' }}>The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className="text-[#AA0924] hover:text-[#880718] transition-colors" style={{ fontWeight: 600, fontSize: '14px' }}>
            <ArrowLeft className="w-4 h-4 inline mr-2" />Back to News & Updates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="News & Updates" breadcrumb="Latest / News & Updates" />

      <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="mx-auto" style={{ maxWidth: '800px', paddingLeft: '24px', paddingRight: '24px' }}>

          {/* Back Link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#AA0924] hover:text-[#880718] transition-colors"
            style={{ fontWeight: 600, fontSize: '14px', marginBottom: '32px', display: 'inline-flex' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Updates
          </Link>

          {/* Title */}
          <h1
            className="text-[#1A1A1A]"
            style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.3', marginBottom: '24px', marginTop: '8px' }}
          >
            {blog.title}
          </h1>

          {/* Hero Image */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover"
              style={{ height: '420px' }}
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500, marginBottom: '48px' }}>
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
            <span style={{ margin: '0 4px' }}>|</span>
            <User className="w-4 h-4" />
            <span>By {blog.author}</span>
          </div>

          {/* Body */}
          <article>{blog.body}</article>

          {/* Scroll to Top */}
          <div className="flex justify-center" style={{ marginTop: '60px', marginBottom: '0' }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#AA0924] hover:text-[#880718] transition-colors cursor-pointer bg-transparent border-none"
              style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}
            >
              SCROLL BACK TO TOP
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
