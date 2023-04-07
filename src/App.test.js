import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const mockFetch = (response, status = 200) =>
  jest.fn(() =>
    Promise.resolve({
      status,
      json: () => Promise.resolve(response),
    })
  );

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Header", () => {
    render(<App />);
    const element = screen.getByText(/profileFinder/i);
    expect(element).toBeInTheDocument();
  });

  test("renders a search input and search button", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(
      /Search GitHub username.../i
    );
    expect(searchInput).toBeInTheDocument();
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
  });

  test("renders search field and finds user", async () => {
    const mockUser = {
      login: "testuser",
      name: "Test User",
      bio: "This is a test user.",
      date: "2017-04-27T10:34:39Z",
      created_at: "2017-04-27T10:34:39Z",
      avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
      public_repos: 1,
      followers: 2,
      following: 3,
      location: null,
      company: null,
      blog: "https://testuser.com",
      twitter_username: null,
    };
    const mockRepos = [
      {
        name: "This is a test repo.",
        id: 1,
      },
    ];
    const fetchMock = jest.spyOn(window, "fetch");
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRepos,
    });

    render(<App />);

    await act(async () => {
      const searchInput = screen.getByPlaceholderText(
        "Search GitHub username..."
      );
      userEvent.type(searchInput, "testuser");
      userEvent.click(screen.getByText("Search"));
    });
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("This is a test user.")).toBeInTheDocument();
    expect(screen.getByText("Joined 27 Apr 2017")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("https://testuser.com")).toBeInTheDocument();
    expect(screen.getByText("This is a test repo.")).toBeInTheDocument();
  });

  test("renders a not found component", async () => {
    const mockedResponse = { message: "Not Found" };
    global.fetch = mockFetch(mockedResponse, 404);

    render(<App />);

    await act(async () => {
      const searchInput = screen.getByRole("textbox");
      userEvent.type(searchInput, "unknown-user");
      userEvent.click(screen.getByText("Search"));
    });
    expect(screen.getByText("User not found")).toBeInTheDocument();
  });
});
