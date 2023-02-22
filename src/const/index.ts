export const quotes = [
  "Những gì anh, chị còn chưa biết, chưa rõ.",
  "Những điều anh, chị muốn chia sẻ, trao đổi.",
  "Những thứ anh, chị muốn học tập, rèn luyện.",
  "Những việc anh, chị muốn làm ngày hôm nay.",
  "Những giá trị mới anh, chị muốn và sẽ tạo ra.",
];

export const texts: { title: string; content: string }[] = [
  {
    title: "Đảng vụ",
    content: "Quản lý sổ tay Đảng viên điện tử",
  },
  {
    title: "Công vụ",
    content: "Lịch công tác, Nhiệm vụ công tác, Văn bản điẹn tử, Thư điện tử",
  },
  {
    title: "Trợ giúp",
    content: "Học trực tuyến, Tri thức mở, Tủ sách điện tử",
  },
];

type ModalOptionType = { text: string; correct?: boolean };
export const modalOptions: ModalOptionType[] = [
  { text: "Chuyển đổi cộng số" },
  { text: "Chuyển sang không dùng giấy" },
  { text: "Thay đổi những thứ hiện tại" },
  { text: "Tất cả ý trên", correct: true },
];
