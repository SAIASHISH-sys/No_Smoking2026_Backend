import axios from "axios";
import { RazorpayOrder, RazorpayPayment } from "../types/razorpay";

export class RazorpayService {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = process.env.RAZORPAY_KEY_ID!;
    this.apiSecret = process.env.RAZORPAY_SECRET!;
    this.baseUrl = "https://api.razorpay.com/v1";
  }

  private get authHeader() {
    return {
      Authorization: `Basic ${Buffer.from(
        `${this.apiKey}:${this.apiSecret}`,
        "utf8"
      ).toString("base64")}`,
    };
  }

  async getOrder(orderId: string): Promise<RazorpayOrder> {
    try {
      const response = await axios.get<RazorpayOrder>(
        `${this.baseUrl}/orders/${orderId}`,
        {
          headers: {
            ...this.authHeader,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Razorpay API error: ${
            error.response?.data?.error?.description || error.message
          }`
        );
      }
      throw error;
    }
  }

  async createOrder(options: {
    amount: number;
    currency: string;
    receipt: string;
    notes?: Record<string, string>;
  }): Promise<RazorpayOrder> {
    try {
      const response = await axios.post<RazorpayOrder>(
        `${this.baseUrl}/orders`,
        options,
        {
          headers: {
            ...this.authHeader,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Razorpay API error: ${
            error.response?.data?.error?.description || error.message
          }`
        );
      }
      throw error;
    }
  }

  async getPayment(paymentId: string): Promise<RazorpayPayment> {
    try {
      const response = await axios.get<RazorpayPayment>(
        `${this.baseUrl}/payments/${paymentId}`,
        {
          headers: {
            ...this.authHeader,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Razorpay API error: ${
            error.response?.data?.error?.description || error.message
          }`
        );
      }
      throw error;
    }
  }

  async getPaymentsByOrder(orderId: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/orders/${orderId}/payments`,
        {
          headers: {
            ...this.authHeader,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Razorpay API error: ${
            error.response?.data?.error?.description || error.message
          }`
        );
      }
      throw error;
    }
  }
}
