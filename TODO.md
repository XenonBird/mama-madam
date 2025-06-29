# TODO List for MyApp

## General

- [ ] Review and clean up unused assets in `src/asset/images` and `src/asset/sounds`.
- [ ] Standardize file and folder naming (e.g., fix typo: `ExporeSreen.jsx` → `ExploreScreen.jsx`).
- [ ] Add missing PropTypes or TypeScript types for all components.
- [ ] Improve code comments and documentation throughout the codebase.

## UI/UX

- [ ] Add loading indicators for async actions/screens.
- [ ] Improve accessibility (labels, roles, color contrast).
- [ ] Refine button and text styles for consistency.
- [ ] Add animations or transitions for navigation and feedback.

## Navigation

- [x] Ensure all screens are accessible from the main navigation.
- [ ] Add deep linking support if needed.

## Lesson & Quiz Flow

- [ ] Load questions dynamically from `educational_content.json` instead of hardcoding in `LessonScreen.jsx`.
- [ ] Add support for more question types (not just MCQ).
- [ ] Save user progress and outcomes (possibly to `user_content.json`).
- [ ] Add feedback sounds or animations for correct/incorrect answers.

## Components

- [ ] Refactor `LevelButton` to fix prop typo (`desabled` → `disabled`).
- [ ] Extract repeated styles into `globalStyles.jsx` where possible.
- [ ] Add unit tests for key components (e.g., `MCQLesson`, `LevelButton`, `ProgressBar`).

## Bugs & Improvements

- [ ] Fix the typo in `ExploreScreen.jsx` filename and references.
- [ ] Ensure `LessonScreen` handles navigation params robustly.
- [ ] Make the number of levels in `RoadMap` dynamic based on content.
- [ ] Add error handling for missing images or sounds.

## Future Features

- [ ] User authentication and profiles.
- [ ] Achievements or badges for completed lessons.
- [ ] Daily streaks or reminders.
- [ ] Localization/multilanguage support.

---

\*Update this file as
