"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"
import { PlusCircle, X } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { addCost } from "@/lib/costs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Define the form schema with zod
const costFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  amount: z.string().regex(/^\$?\d+(\.\d{1,2})?$/, {
    message: "Amount must be a valid price (e.g. $20 or 20.99)",
  }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date must be in YYYY-MM-DD format",
  }),
  comment: z.string().min(3, { message: "Comment must be at least 3 characters" }),
  satisfactionLevel: z.coerce.number().min(1).max(5),
  relatedPostSlug: z.string().optional(),
})

// Infer the type from the schema
type CostFormValues = z.infer<typeof costFormSchema>

// Define the props for the component
interface AddCostFormProps {
  onCostAdded: () => void // Callback to refresh the costs list
  locale: string // Current locale
}

export function AddCostForm({ onCostAdded, locale }: AddCostFormProps) {
  const t = useTranslations("Costs")
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  
  // Get today's date in YYYY-MM-DD format for the default value
  const today = new Date().toISOString().split('T')[0]
  
  // Initialize form with default values
  const form = useForm<CostFormValues>({
    resolver: zodResolver(costFormSchema),
    defaultValues: {
      name: "",
      amount: "",
      date: today,
      comment: "",
      satisfactionLevel: 3,
      relatedPostSlug: "",
    },
  })
  
  // Handle form submission
  const onSubmit = async (values: CostFormValues) => {
    try {
      // Ensure amount has $ prefix
      const amount = values.amount.startsWith("$") 
        ? values.amount 
        : `$${values.amount}`
      
      // Add the new cost
      await addCost({
        ...values,
        amount,
      })
      
      // Reset form and close dialog
      form.reset()
      setIsDialogOpen(false)
      
      // Notify parent component that a cost was added
      onCostAdded()
    } catch (error) {
      console.error("Failed to add cost:", error)
    }
  }
  
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="mb-6 w-full md:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          {t("addNewCost")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t("addNewCost")}</DialogTitle>
          <DialogDescription>
            {t("fillCostDetailsBelow")}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{locale === 'pl' ? 'Nazwa' : 'Name'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("namePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{locale === 'pl' ? 'Kwota' : 'Amount'}</FormLabel>
                    <FormControl>
                      <Input placeholder="$20.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{locale === 'pl' ? 'Data' : 'Date'}</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{locale === 'pl' ? 'Komentarz' : 'Comment'}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("commentPlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="satisfactionLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{locale === 'pl' ? 'Satysfakcja (1-5)' : 'Satisfaction (1-5)'}</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select satisfaction level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 - {t("satisfaction.veryDissatisfied")}</SelectItem>
                      <SelectItem value="2">2 - {t("satisfaction.dissatisfied")}</SelectItem>
                      <SelectItem value="3">3 - {t("satisfaction.neutral")}</SelectItem>
                      <SelectItem value="4">4 - {t("satisfaction.satisfied")}</SelectItem>
                      <SelectItem value="5">5 - {t("satisfaction.verySatisfied")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="relatedPostSlug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{locale === 'pl' ? 'Powiązany post (opcjonalnie)' : 'Related Post (optional)'}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("relatedPostPlaceholder")} {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("relatedPostDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
              >
                {t("cancel")}
              </Button>
              <Button type="submit">
                {t("addCost")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
