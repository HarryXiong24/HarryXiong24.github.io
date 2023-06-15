---
category: Git
tag:
  - Git
date: 2020-06-05
---

# Git Large File Storage

Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.

## Getting Started

1. Download and install the Git command line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:

   ```sh
   git lfs install
   ```

   You'll need to run this in your repository directory, once per repository.

2. Select the file types you'd like Git LFS to manage (or directly edit your .gitattributes). You can configure additional file extensions at anytime.

   ```sh
   git lfs track "*.psd"
   ```

   Make sure .gitattributes is tracked

   ```sh
   git add .gitattributes
   ```
