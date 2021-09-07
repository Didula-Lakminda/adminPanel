import React from 'react';
import './admin.css';

export default function AdminPanel({ children }) {
    return (
        <div>
        <input type="checkbox" name="" id="nav-toggle" />
        <div class="sidebar">
          <div class="sidebar-brand">
            <h2>
              <span class="lab la-accusoft"></span> <span>Export Center</span>
            </h2>
          </div>
          <div class="sidebar-menu">
            <ul>
              <li>
                <a href="" class="active">
                  {" "}
                  {/* icons */}
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  {" "}
                  {/* icons */}
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  {/* icons */}
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  {/* icons */}
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                {/* icons */}
                  <span>Inventory</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>Accounts</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-content">
        <header>
        <h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
            Dashboard
          </h2>
        </header>
          <main>
              {children}
          </main>
        </div>
      </div>
    )
}
