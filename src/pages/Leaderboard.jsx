import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const exampleData = {
  coding: [
    { rank: 1, user: "User1", screentime: "120h" },
    { rank: 2, user: "User2", screentime: "110h" },
    { rank: 3, user: "User3", screentime: "105h" },
    { rank: 4, user: "User4", screentime: "100h" },
    { rank: 5, user: "User5", screentime: "95h" },
    { rank: 6, user: "User6", screentime: "90h" },
    { rank: 7, user: "User7", screentime: "85h" },
    { rank: 8, user: "User8", screentime: "80h" },
    { rank: 9, user: "User9", screentime: "75h" },
    { rank: 10, user: "User10", screentime: "70h" },
    { rank: 11, user: "User11", screentime: "65h" },
    { rank: 12, user: "User12", screentime: "60h" },
  ],
  gaming: [
    { rank: 1, user: "User1", screentime: "150h" },
    { rank: 2, user: "User2", screentime: "140h" },
    { rank: 3, user: "User3", screentime: "130h" },
    { rank: 4, user: "User4", screentime: "120h" },
    { rank: 5, user: "User5", screentime: "110h" },
    { rank: 6, user: "User6", screentime: "100h" },
    { rank: 7, user: "User7", screentime: "90h" },
    { rank: 8, user: "User8", screentime: "80h" },
    { rank: 9, user: "User9", screentime: "70h" },
    { rank: 10, user: "User10", screentime: "60h" },
    { rank: 11, user: "User11", screentime: "50h" },
    { rank: 12, user: "User12", screentime: "40h" },
  ],
  activitywatch: [
    { rank: 1, user: "User1", screentime: "200h" },
    { rank: 2, user: "User2", screentime: "190h" },
    { rank: 3, user: "User3", screentime: "180h" },
    { rank: 4, user: "User4", screentime: "170h" },
    { rank: 5, user: "User5", screentime: "160h" },
    { rank: 6, user: "User6", screentime: "150h" },
    { rank: 7, user: "User7", screentime: "140h" },
    { rank: 8, user: "User8", screentime: "130h" },
    { rank: 9, user: "User9", screentime: "120h" },
    { rank: 10, user: "User10", screentime: "110h" },
    { rank: 11, user: "User11", screentime: "100h" },
    { rank: 12, user: "User12", screentime: "90h" },
  ],
};

const Leaderboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      {["coding", "gaming", "activitywatch"].map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold capitalize">{category}</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Screentime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exampleData[category].map((entry) => (
                <TableRow key={entry.rank}>
                  <TableCell>{entry.rank}</TableCell>
                  <TableCell>{entry.user}</TableCell>
                  <TableCell>{entry.screentime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;