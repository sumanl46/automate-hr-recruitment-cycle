"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Icons } from "@/components/icons"

export default function PostJobForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulating form submission
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Job Category</Label>
        <Select id="category" required>
          <option value="">Select a category</option>
          <option value="technology">Technology</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="customer-service">Customer Service</option>
          <option value="finance">Finance</option>
          <option value="human-resources">Human Resources</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea id="description" required rows={5} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea id="requirements" required rows={3} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="salary">Salary Range</Label>
        <Input id="salary" placeholder="e.g. $50,000 - $70,000" />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Post Job
      </Button>
    </form>
  )
}

