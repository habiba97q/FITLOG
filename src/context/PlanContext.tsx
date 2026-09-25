"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ILibrary } from "@/types/library.type";

interface PlanContextType {
  plan: ILibrary[];
  saved: ILibrary[];
  completed: number[];
  addToPlan: (workout: ILibrary) => void;
  removeFromPlan: (id: number) => void;
  addToSaved: (workout: ILibrary) => void;
  removeFromSaved: (id: number) => void;
  toggleDone: (id: number) => void;
  isDone: (id: number) => boolean;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  planCount: number;
  savedCount: number;
  showToast: (msg: string) => void;
}

const PlanContext = createContext<PlanContextType | null>(null);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog_plan");
    const savedLifts = localStorage.getItem("fitlog_saved");
    const savedDone = localStorage.getItem("fitlog_completed");

    if (savedPlan) {
      try {
        setPlan(JSON.parse(savedPlan));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedLifts) {
      try {
        setSaved(JSON.parse(savedLifts));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedDone) {
      try {
        setCompleted(JSON.parse(savedDone));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const showToast = (msg: string) => {
    toast(msg);
  };

  const addToPlan = (workout: ILibrary) => {
    if (plan.find((item) => item.id === workout.id)) {
      toast.info("Already in today's plan");
      return;
    }
    if (plan.length >= 5) {
      toast.warning("Cap of 5 lifts reached for today");
      return;
    }
    const updated = [...plan, workout];
    setPlan(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));
    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    const updated = plan.filter((item) => item.id !== id);
    setPlan(updated);
    localStorage.setItem("fitlog_plan", JSON.stringify(updated));

    const updatedDone = completed.filter((doneId) => doneId !== id);
    setCompleted(updatedDone);
    localStorage.setItem("fitlog_completed", JSON.stringify(updatedDone));

    toast.info("Removed from today's plan");
  };

  const addToSaved = (workout: ILibrary) => {
    if (saved.find((item) => item.id === workout.id)) {
      toast.info("Already saved for later");
      return;
    }
    const updated = [...saved, workout];
    setSaved(updated);
    localStorage.setItem("fitlog_saved", JSON.stringify(updated));
    toast.success("Saved for later");
  };

  const removeFromSaved = (id: number) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem("fitlog_saved", JSON.stringify(updated));
    toast.info("Removed from saved");
  };

  const toggleDone = (id: number) => {
    let updated: number[];
    if (completed.includes(id)) {
      updated = completed.filter((doneId) => doneId !== id);
      toast.info("Marked as incomplete");
    } else {
      updated = [...completed, id];
      toast.success("Marked as done");
    }
    setCompleted(updated);
    localStorage.setItem("fitlog_completed", JSON.stringify(updated));
  };

  const isDone = (id: number) => completed.includes(id);
  const isInPlan = (id: number) => plan.some((item) => item.id === id);
  const isSaved = (id: number) => saved.some((item) => item.id === id);

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        completed,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
        toggleDone,
        isDone,
        isInPlan,
        isSaved,
        planCount: plan.length,
        savedCount: saved.length,
        showToast,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within PlanProvider");
  }
  return context;
};
