# LeetCode Solutions

Automatically sync your LeetCode submissions to this repository.

## Setup

To use the automated sync, you need to set up the following GitHub Secrets:

1. `LEETCODE_SESSION`: Your LeetCode session cookie.
2. `LEETCODE_CSRF_TOKEN`: Your LeetCode CSRF token.

### How to get the tokens:
- Log in to LeetCode.
- Open Developer Tools (F12) -> Network tab.
- Refresh the page and look for a request to `leetcode.com`.
- In the Request Headers, find `cookie` and copy the values for `LEETCODE_SESSION` and `csrftoken`.

### How to add Secrets:
- Go to your repository **Settings** > **Secrets and variables** > **Actions**.
- Click **New repository secret**.
- Add both secrets with the values you copied.

The workflow is set to run weekly on Saturdays, or you can trigger it manually from the **Actions** tab.
