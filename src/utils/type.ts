interface Advisor {
  id: number;
  advisor_id: string;
  project_id: number;
  name: string;
  department: string;
  email: string;
}

interface Student {
  id: number;
  student_id: string;
  project_id: number;
  email: string;
  name: string;
  major: string;
}

export interface ProjectQ {
  project_id: number;
  title: string;
  advisors: Advisor[];
  description: string;
  endDate: string;
  startDate: string;
  status: string;
  students: Student[];
}
