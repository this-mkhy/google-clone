import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
      <div className="flex sm:justify-around justify-between items-center mt-4">
        <Link to="#">Help</Link>
        <Link to="#">feedback</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">Terms</Link>
      </div>
      <p>© 2022 Google, Inc. </p>
    </div>
  )
}
