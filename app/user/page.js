"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HiOutlineUser, 
  HiOutlineMail, 
  HiOutlineCalendar, 
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineCreditCard,
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineShieldCheck
} from "react-icons/hi";
import { 
  MdOutlineEvent, 
  MdOutlinePayment,
  MdOutlineHistory,
  MdOutlineSettings
} from "react-icons/md";

export default function UserPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userStats, setUserStats] = useState({
    totalEvents: 0,
    totalPayments: 0,
    memberSince: null,
    lastActivity: null
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/log-in");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      // Calculate member since date
      const memberSince = new Date(session.user.createdAt || Date.now());
      const lastActivity = new Date(session.user.lastLogin || Date.now());
      
      setUserStats({
        totalEvents: session.user.oder?.length || 0,
        totalPayments: session.user.adtocard?.length || 0,
        memberSince: memberSince.toLocaleDateString(),
        lastActivity: lastActivity.toLocaleDateString()
      });
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <Image
                src={session.user.image || "/image/logo.png"}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-purple-100"
              />
              {session.user.isAdmin && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
                  <HiOutlineShieldCheck className="w-4 h-4" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {session.user.name || session.user.userName}!
              </h1>
              <p className="text-gray-600 mb-4">
                {session.user.email}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <HiOutlineCalendar className="w-4 h-4" />
                  <span>Member since {userStats.memberSince}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineUser className="w-4 h-4" />
                  <span>@{session.user.userName || "No username"}</span>
                </div>
                {session.user.firstLogin && (
                  <div className="flex items-center gap-2 text-green-600">
                    <HiOutlineBell className="w-4 h-4" />
                    <span>First time login!</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <HiOutlineLogout className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalEvents}</p>
              </div>
              <MdOutlineEvent className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Payments Made</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalPayments}</p>
              </div>
              <MdOutlinePayment className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Last Activity</p>
                <p className="text-sm font-bold text-gray-900">{userStats.lastActivity}</p>
              </div>
              <HiOutlineChartBar className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Status</p>
                <p className="text-sm font-bold text-green-600">Active</p>
              </div>
              <HiOutlineStar className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/registion"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MdOutlineEvent className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Register for Event</h3>
                    <p className="text-sm text-gray-600">Join new competitions</p>
                  </div>
                </Link>

                <Link
                  href="/api/pay"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <HiOutlineCreditCard className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Make Payment</h3>
                    <p className="text-sm text-gray-600">Pay for registrations</p>
                  </div>
                </Link>

                <Link
                  href="/user/history"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MdOutlineHistory className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">View History</h3>
                    <p className="text-sm text-gray-600">Past activities</p>
                  </div>
                </Link>

                <Link
                  href="/user/settings"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MdOutlineSettings className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Settings</h3>
                    <p className="text-sm text-gray-600">Account preferences</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineUser className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Username</p>
                  <p className="font-medium text-gray-900">
                    {session.user.userName || "Not set"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{session.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-medium text-gray-900">{userStats.memberSince}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineShieldCheck className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Account Type</p>
                  <p className="font-medium text-gray-900">
                    {session.user.isAdmin ? "Administrator" : "Regular User"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/user/edit-profile"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <HiOutlineCog className="w-4 h-4" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {userStats.totalEvents > 0 ? (
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Event Registration</p>
                  <p className="text-sm text-gray-600">You registered for a new event</p>
                </div>
                <span className="text-sm text-gray-500 ml-auto">Recently</span>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MdOutlineEvent className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No recent activity</p>
                <p className="text-sm">Start by registering for an event!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
