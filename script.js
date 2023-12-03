// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn)

const pText = document.createElement("p");
pText.id = "text";
pText.innerText = "Para 1";
pText.style.color = "#777";
pText.style.fontSize = "2rem";
pText.innerText =
  "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
document.body.insertAdjacentElement("beforebegin", pText);

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const list1 = document.querySelectorAll("ul li");
for (let i = 0; i < list1.length; i++) {
  list1[i].style.color = "blue";
}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
const ul = document.getElementById("list");

const list2 = document.querySelectorAll("#list li");
for (let i = 0; i < list2.length; i++) {
  list2[i].style.color = "black";
}

// 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

for (let i = 8; i < 11; i++) {
  const ele = document.createElement("li");
  ele.innerText = `Item ${i}`;
  ul.appendChild(ele);
}

// 2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
list2[0].style.color = "red";

// 3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
list2[2].style.display = "inline";
list2[2].style.backgroundColor = "blue";

// 4. Remove thẻ <li> 4
list2[3].parentNode.removeChild(list2[3]);

// 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLI = document.createElement("li");
newLI.innerText = "New li 4";
list2[2].insertAdjacentElement("afterend", newLI);
