import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  selectedProject: number | null;
  selectedBlogPost: number | null;
  activeSection: string;
  isScrolled: boolean;
}

const initialState: UIState = {
  selectedProject: null,
  selectedBlogPost: null,
  activeSection: 'hero',
  isScrolled: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<number | null>) => {
      state.selectedProject = action.payload;
    },
    setSelectedBlogPost: (state, action: PayloadAction<number | null>) => {
      state.selectedBlogPost = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
  },
});

export const { setSelectedProject, setSelectedBlogPost, setActiveSection, setIsScrolled } = uiSlice.actions;
export default uiSlice.reducer;
