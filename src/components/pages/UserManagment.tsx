import Card from "../UI/Card";
import {
  PieChart,
  Pie,
  Cell,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import RadianTooltip from "../common/RadianToolTip";

const Membership = () => {
  const list = [
    { name: "Die Hard", students: 600 },
    { name: "National Lampoon", students: 700 },
    { name: "Elf", students: 500 },
    { name: "National Lampoon", students: 700 },
    { name: "Home Alone", students: 1000 },
  ];

  const record = [
    { name: "Zone", students: 600 },
    { name: "main", students: 1000 },
    { name: "Hello", students: 500 },
    { name: "Out", students: 700 },
    { name: "Geek", students: 900 },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF33E3"];

  return (
    <Card className="text-justify">
      <div className=" grid sm:grid-cols-1 lg:grid-cols-2">
        <PieChart width={600} height={400} className="container">
          <Pie
            data={list}
            dataKey="students"
            label={RadianTooltip}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={1}
            labelLine={false}
            cx={300}
            cy={200}
          >
            {list?.map((entry: any, index: number) => (
              <Cell fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>

        <PieChart width={600} height={400}>
          <Pie
            data={record}
            dataKey="students"
            label={RadianTooltip}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={1}
            labelLine={false}
          >
            {record?.map((entry: any, index: number) => (
              <Cell fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <BarChart width={500} height={300} data={list}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="students" fill="#8884d8" />
      </BarChart>
    </Card>
  );
};

export default Membership;
