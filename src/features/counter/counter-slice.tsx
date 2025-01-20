import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
 * createSlice là nơi khai báo logic chính trong Redux, bao gồm:
 * - State ban đầu (initialState)
 * - Các reducer để xử lý thay đổi state
 * - Các action tự động được tạo dựa trên reducer
 *
 * payload đóng vai trò là dữ liệu được truyền vào trong mỗi action:
 * - Đây là cách gửi thông tin từ component đến Redux store
 */
interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Logic will be here
    // Increment
    Incremented(state) {
      //It's ok to make this because immer makes it immutable
      //under the hood

      //However, this is really a bad idea in normal redux
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // Decrement
    // Reset
  },
});

export const { Incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
