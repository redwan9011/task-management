import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=de427761"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=de427761"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=de427761"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css?t=1703243438900";
import {
  createBrowserRouter,
  RouterProvider
} from "/node_modules/.vite/deps/react-router-dom.js?v=de427761";
import Layouts from "/src/Layouts/Layouts.jsx?t=1703242278155";
import Home from "/src/Components/Home/Home.jsx?t=1703242562757";
import Login from "/src/Components/Authentication/Login.jsx";
import Register from "/src/Components/Authentication/Register.jsx";
import AuthProvider from "/src/AuthProvider/AuthProvider.jsx";
import Dashboard from "/src/Dashboard/Dashboard.jsx?t=1703243182834";
import PrivateRout from "/src/PrivateRout/PrivateRout.jsx";
import UserProfile from "/src/Dashboard/UserProfile.jsx";
import CreateTask from "/src/Dashboard/CreateTask.jsx";
import Todo from "/src/Dashboard/Todo.jsx?t=1703243438900";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Layouts, {}, void 0, false, {
        fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
        lineNumber: 24,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 28,
            columnNumber: 14
          }, this)
        },
        {
          path: "/audience",
          element: /* @__PURE__ */ jsxDEV(UsingPeople, {}, void 0, false, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 32,
            columnNumber: 14
          }, this)
        },
        {
          path: "/about",
          element: /* @__PURE__ */ jsxDEV(AboutUs, {}, void 0, false, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 36,
            columnNumber: 14
          }, this)
        }
      ]
    },
    {
      path: "/login",
      element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
        fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
        lineNumber: 43,
        columnNumber: 12
      }, this)
    },
    {
      path: "/register",
      element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
        fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
        lineNumber: 47,
        columnNumber: 12
      }, this)
    },
    {
      path: "/dashboard",
      element: /* @__PURE__ */ jsxDEV(PrivateRout, { children: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
        fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
        lineNumber: 51,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "profile",
          element: /* @__PURE__ */ jsxDEV(PrivateRout, { children: [
            " ",
            /* @__PURE__ */ jsxDEV(UserProfile, {}, void 0, false, {
              fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
              lineNumber: 55,
              columnNumber: 28
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 55,
            columnNumber: 14
          }, this)
        },
        {
          path: "createTask",
          element: /* @__PURE__ */ jsxDEV(PrivateRout, { children: /* @__PURE__ */ jsxDEV(CreateTask, {}, void 0, false, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 59,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 59,
            columnNumber: 14
          }, this)
        },
        {
          path: "todo",
          element: /* @__PURE__ */ jsxDEV(PrivateRout, { children: [
            " ",
            /* @__PURE__ */ jsxDEV(Todo, {}, void 0, false, {
              fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
              lineNumber: 63,
              columnNumber: 28
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 63,
            columnNumber: 14
          }, this)
        },
        {
          path: "update/:id",
          element: /* @__PURE__ */ jsxDEV(PrivateRout, { children: [
            " ",
            /* @__PURE__ */ jsxDEV(UpdateTask, {}, void 0, false, {
              fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
              lineNumber: 67,
              columnNumber: 28
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
            lineNumber: 67,
            columnNumber: 14
          }, this),
          loader: ({ params }) => fetch(` http://localhost:5000/tasks/${params.id}`)
        }
      ]
    }
  ]
);
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=de427761";
import UpdateTask from "/src/Dashboard/UpdateTask.jsx";
import UsingPeople from "/src/Components/UsingPeople/UsingPeople.jsx?t=1703240551546";
import AboutUs from "/src/Components/AboutUs/AboutUs.jsx?t=1703241268442";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
    lineNumber: 84,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Projects/task-manage-client/task-management/src/main.jsx",
    lineNumber: 83,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,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O0FBQ3ZCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxhQUFhO0FBRXBCLE1BQU1DLGNBQWMsSUFBSUwsWUFBWTtBQUVwQ3JCLFNBQVMyQixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxFQUNuRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyx1QkFBb0IsUUFBUUosYUFDM0IsaUNBQUMsZ0JBQ0MsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUEsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0E7QUFDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJMYXlvdXRzIiwiSG9tZSIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJBdXRoUHJvdmlkZXIiLCJEYXNoYm9hcmQiLCJQcml2YXRlUm91dCIsIlVzZXJQcm9maWxlIiwiQ3JlYXRlVGFzayIsIlRvZG8iLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwibG9hZGVyIiwicGFyYW1zIiwiZmV0Y2giLCJpZCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlVwZGF0ZVRhc2siLCJVc2luZ1Blb3BsZSIsIkFib3V0VXMiLCJxdWVyeUNsaWVudCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQnJvd3NlclJvdXRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTGF5b3V0cyBmcm9tICcuL0xheW91dHMvTGF5b3V0cyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0NvbXBvbmVudHMvSG9tZS9Ib21lJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0NvbXBvbmVudHMvQXV0aGVudGljYXRpb24vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vQ29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi9SZWdpc3Rlcic7XG5pbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gJy4vQXV0aFByb3ZpZGVyL0F1dGhQcm92aWRlcic7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vRGFzaGJvYXJkL0Rhc2hib2FyZCc7XG5pbXBvcnQgUHJpdmF0ZVJvdXQgZnJvbSAnLi9Qcml2YXRlUm91dC9Qcml2YXRlUm91dCc7XG5cbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL0Rhc2hib2FyZC9Vc2VyUHJvZmlsZSc7XG5pbXBvcnQgQ3JlYXRlVGFzayBmcm9tICcuL0Rhc2hib2FyZC9DcmVhdGVUYXNrJztcbmltcG9ydCBUb2RvIGZyb20gJy4vRGFzaGJvYXJkL1RvZG8nO1xuXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPExheW91dHM+PC9MYXlvdXRzPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGVsZW1lbnQ6IDxIb21lPjwvSG9tZT5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvYXVkaWVuY2UnLFxuICAgICAgICBlbGVtZW50OiA8VXNpbmdQZW9wbGU+PC9Vc2luZ1Blb3BsZT5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgICAgICBlbGVtZW50OiA8QWJvdXRVcz48L0Fib3V0VXM+XG4gICAgICB9LFxuICAgIFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbG9naW4nLFxuICAgIGVsZW1lbnQ6IDxMb2dpbj48L0xvZ2luPlxuICB9LFxuICB7XG4gICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgZWxlbWVudDogPFJlZ2lzdGVyPjwvUmVnaXN0ZXI+XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Rhc2hib2FyZCcsXG4gICAgZWxlbWVudDogPFByaXZhdGVSb3V0PjxEYXNoYm9hcmQ+PC9EYXNoYm9hcmQ+PC9Qcml2YXRlUm91dD4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3Byb2ZpbGUnLFxuICAgICAgICBlbGVtZW50OiA8UHJpdmF0ZVJvdXQ+IDxVc2VyUHJvZmlsZT48L1VzZXJQcm9maWxlPiA8L1ByaXZhdGVSb3V0PlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NyZWF0ZVRhc2snLFxuICAgICAgICBlbGVtZW50OiA8UHJpdmF0ZVJvdXQ+PENyZWF0ZVRhc2s+PC9DcmVhdGVUYXNrPjwvUHJpdmF0ZVJvdXQ+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAndG9kbycsXG4gICAgICAgIGVsZW1lbnQ6IDxQcml2YXRlUm91dD4gPFRvZG8+PC9Ub2RvPiA8L1ByaXZhdGVSb3V0PlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VwZGF0ZS86aWQnLFxuICAgICAgICBlbGVtZW50OiA8UHJpdmF0ZVJvdXQ+IDxVcGRhdGVUYXNrPjwvVXBkYXRlVGFzaz4gPC9Qcml2YXRlUm91dD4sXG4gICAgICAgIGxvYWRlcjogICh7cGFyYW1zfSk9PiBmZXRjaCggYCBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFza3MvJHtwYXJhbXMuaWR9YClcblxuICAgICAgfSxcbiAgICBdXG4gIH1cbl0pO1xuXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgVXBkYXRlVGFzayBmcm9tICcuL0Rhc2hib2FyZC9VcGRhdGVUYXNrJztcbmltcG9ydCBVc2luZ1Blb3BsZSBmcm9tICcuL0NvbXBvbmVudHMvVXNpbmdQZW9wbGUvVXNpbmdQZW9wbGUnO1xuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi9Db21wb25lbnRzL0Fib3V0VXMvQWJvdXRVcyc7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4pXG4iXSwiZmlsZSI6IkM6L1Byb2plY3RzL3Rhc2stbWFuYWdlLWNsaWVudC90YXNrLW1hbmFnZW1lbnQvc3JjL21haW4uanN4In0=