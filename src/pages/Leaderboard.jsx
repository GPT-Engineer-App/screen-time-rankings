import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  const [category, setCategory] = useState("coding");
  const [sortKey, setSortKey] = useState("rank");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...exampleData[category]].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <div className="flex space-x-4">
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="coding">Coding</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="activitywatch">Activity Watch</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("rank")}>Rank</TableHead>
            <TableHead onClick={() => handleSort("user")}>User</TableHead>
            <TableHead onClick={() => handleSort("screentime")}>Screentime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((entry) => (
            <TableRow key={entry.rank}>
              <TableCell>{entry.rank}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" onClick={() => setSelectedUser(entry.user)}>
                      {entry.user}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{entry.user}'s Profile</DialogTitle>
                    </DialogHeader>
                    <div>
                      <p>Total Screentime: {entry.screentime}</p>
                      <p>Achievements: ...</p>
                      <p>Other details: ...</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>{entry.screentime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboard;